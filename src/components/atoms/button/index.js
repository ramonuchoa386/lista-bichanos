import React from "react";
import { CustomBtn } from "./styles";

const Button = (props) => {
  const { btnAction, className, btnContent } = props;

  return (
    <CustomBtn type="button" onClick={btnAction} className={className}>
      {btnContent}
    </CustomBtn>
  );
};

export default Button;
