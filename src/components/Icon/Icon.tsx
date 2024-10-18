interface IIconProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number;
  customStyles?: React.CSSProperties;
}

const Icon: React.FC<IIconProps> = ({ Icon, size, customStyles = {} }) => {
  if (!Icon) return null;
  if (size)
    return (
      <Icon
        style={{ ...customStyles, userSelect: "none" }}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
      />
    );
  return <Icon style={{ ...customStyles, userSelect: "none" }} />;
};

export default Icon;
