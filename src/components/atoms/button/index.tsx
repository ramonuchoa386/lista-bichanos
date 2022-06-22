import React from "react";
import { CustomBtn } from "./styles";

interface IButton {
  btnAction: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button = (props: IButton) => {
  const { btnAction, className, children } = props;

  return (
    <CustomBtn type="button" onClick={btnAction} className={className}>
      {children}
    </CustomBtn>
  );
};

export default Button;
