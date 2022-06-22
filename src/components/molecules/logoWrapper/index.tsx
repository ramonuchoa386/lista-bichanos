import React from "react";
import { Button, Icon } from "../../atoms";

interface ILogoWrapper {
  icon: string;
  toggleSideBar: () => void;
}

function LogoWrapper(props: ILogoWrapper) {
  const { icon, toggleSideBar } = props;

  return (
    <section className="logo-wrapper">
      <h1>Lista Bichanos</h1>
      <Button btnAction={toggleSideBar}>
        <Icon icon={icon} />
      </Button>
    </section>
  );
}

export default LogoWrapper;