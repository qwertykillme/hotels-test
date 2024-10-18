import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";

//иконки
import { ReactComponent as ArrowIcon } from "@/assets/svg/arrow-right.svg";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Button
      text="Назад"
      LeftIcon={ArrowIcon}
      onClick={goBack}
      RightIcon={false}
      customLeftIconStyles={{ transform: "rotate(180deg)" }}
    />
  );
};

export default BackButton;
