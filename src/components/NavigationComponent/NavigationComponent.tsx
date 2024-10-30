import Button from "@components/Button/Button";
import useTelegram from "hooks/useTelegram";
import { useCallback} from "react";
import styles from "./styles.module.scss";

interface INavigationComponentProps {
  hotelName: string;
}

const NavigationComponent: React.FC<INavigationComponentProps> = ({ hotelName }) => {
  const hotelLocations: Record<string, { destinationLatitude: number; destinationLongitude: number }> = {
    "Grant Karat Sochi": { destinationLatitude: 43.57563, destinationLongitude: 39.726659 },
  };

  const { destinationLatitude, destinationLongitude } = hotelLocations[hotelName];
  const { tg } = useTelegram();

  const openMap = useCallback((url?: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const openUrl = (mapUrl: string) => {
      if (isMobile) {
          window.open(mapUrl, "_blank", "noopener,noreferrer");
          console.log("открывается с тлф")

      } else {
        // На десктопе можно просто открыть ссылку через window.open
        window.open(mapUrl, "_blank", "noopener,noreferrer");
        console.log("открывается с пк");
      }
    };

    if (url) {
      openUrl(url);
    } else if (tg && typeof tg.requestLocation === "function") {
      console.log("используется tg");

      tg.requestLocation({
        success: (location) => {
          const { latitude, longitude } = location;
          console.log("Геолокация через tg API:", latitude, longitude);
          const yandexMapUrl = `https://yandex.ru/maps/?rtext=${latitude},${longitude}~${destinationLatitude},${destinationLongitude}`;
          openUrl(yandexMapUrl);
        },
        error: () => {
          console.error("Ошибка получения координат через tg API");
          openUrl(`https://yandex.ru/maps/?rtext=${destinationLatitude},${destinationLongitude}`);
        },
      });
    } else if (navigator.geolocation) {
      console.log("используется navigator.geolocation");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Геолокация через navigator.geolocation:", latitude, longitude);
          const yandexMapUrl = `https://yandex.ru/maps/?rtext=${latitude},${longitude}~${destinationLatitude},${destinationLongitude}`;
          openUrl(yandexMapUrl);
        },
        (error) => {
          console.error("Ошибка получения координат через navigator.geolocation:", error);
          openUrl(`https://yandex.ru/maps/?rtext=${destinationLatitude},${destinationLongitude}`);
        }
      );
    } else {
      openUrl(`https://yandex.ru/maps/?rtext=${destinationLatitude},${destinationLongitude}`);
    }
  }, [tg, destinationLatitude, destinationLongitude]);

  const handleRequestLocation = useCallback(() => {
    openMap();
  }, [openMap]);

  return (
    <div className={styles.navigation_container}>
      <Button
        text="Открыть навигацию"
        onClick={handleRequestLocation}
        className={styles.navigation_container_button}
      />
    </div>
  );
};

export default NavigationComponent;
