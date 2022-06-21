import React from "react";
import { Button, Icon } from "../../atoms";

function LogoWrapper(props) {
  const { icon, toggleSideBar } = props;

  return (
    <section className="logo-wrapper">
      <h1>Lista Bichanos</h1>
      <Button btnContent={<Icon icon={icon} />} btnAction={toggleSideBar} />
    </section>
  );
}

export default LogoWrapper;
