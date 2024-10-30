import styles from "./styles.module.scss";
import React, { useState } from "react";
import { ReactComponent as CopyIcon } from "@/assets/svg/copy.svg";
import Icon from "@components/Icon/Icon";
import { IFoodScheduleRes, IWiFiHotelRes } from "@redux/services/hotelsService/response";

interface DefinitionListProps {
  wifiList?: IWiFiHotelRes[];
  foodScheduleList?: IFoodScheduleRes[];
}

const DefinitionList: React.FC<DefinitionListProps> = ({ wifiList, foodScheduleList }) => {
  const [, setCopied] = useState<string | null>(null);

  const handleCopy = (value: string | number) => {
    const textToCopy = value.toString();

    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999); 

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(textToCopy);
      } 
    } catch (err) {
      console.error('Ошибка при копировании текста:', err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className={styles.container}>

      {wifiList && wifiList.map((wifi) => (
        <dl className={styles.dl} key={wifi.id}>
          <h4 className={styles.title}> {wifi.location} </h4>
          <div className={styles.wrapper}>
            <dt className={styles.dt}> {wifi.wifi_name}: </dt>
            <dd className={styles.dd}>
              <div className={styles.dd_content}>
                <div
                  className={styles.password}
                  onClick={() => handleCopy(wifi.wifi_password)}
                >
                  {wifi.wifi_password}
                  <Icon Icon={CopyIcon} size={20}  />
                </div>
                {/* {copied === wifi.wifi_password && <span>Скопировано!</span>} */}
              </div>
            </dd>
          </div>
        </dl>
      ))}
      {foodScheduleList && foodScheduleList.map((schedule) => 
      <div>
        { schedule.location && <h4 className={styles.schedule_title}> {schedule.location} </h4>}
        <dl className={styles.dl} key={schedule.id}>
          <div className={styles.wrapper}>
            <dt className={styles.dt}> {schedule.what}: </dt>
            <dd className={styles.dd}>
              <div className={styles.dd_content}>
                {schedule.when}
              </div>
            </dd>
          </div>

        </dl>
    </div>
      )}
    </div>
  );
};

export default DefinitionList;
