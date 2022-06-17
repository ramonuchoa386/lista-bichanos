import React from "react";
import { Button, Img, Icon } from "../../atoms";
import logo from "../../../static/marca-hostgatos.svg";

function LogoWrapper(props) {
  const { icon, toggleSideBar } = props;

  return (
    <section className="logo-wrapper">
      <Img imageSrc={logo} alterText="Hostgatos" width="250px" height="66px" />
      <Button btnContent={<Icon icon={icon} />} btnAction={toggleSideBar} />
    </section>
  );
}

export default LogoWrapper;
