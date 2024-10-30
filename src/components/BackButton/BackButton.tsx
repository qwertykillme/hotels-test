import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import styles from "./styles.module.scss"

//иконки
import { ReactComponent as ArrowIcon } from "@/assets/svg/arrow-right.svg";
import useTripId from "helpers/useTripId";



const BackButton: React.FC = () => {
  const id = useTripId()
  const redirectToHomePaths = ["/add-trip", "/trip-history", `/trip/${id}`];
  const shouldRedirectToHome = (path: string) => redirectToHomePaths.includes(path);
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (shouldRedirectToHome(location.pathname)) {
      navigate("/");
    } else {
      navigate(-1); 
    }
  };
  return (
    <Button
      text="Назад"
      LeftIcon={ArrowIcon}
      onClick={goBack}
      RightIcon={false}
      customLeftIconStyles={{ transform: "rotate(180deg)" }}
      className={styles.backButton}
    />
  );
};

export default BackButton;
