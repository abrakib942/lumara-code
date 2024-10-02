/* eslint-disable react/prop-types */
import { Button } from "antd";

const CustomButton = ({ children, onClick, ...rest }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: "#719331",
        borderColor: "#719331",
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
