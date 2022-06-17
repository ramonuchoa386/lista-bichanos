import React from "react";
import { LogoWrapper, Navigation } from "../../molecules";
import { CustomSideBar } from "./styles";

function Sidebar() {
  const [shrinkSideBar, setShrinkSideBar] = React.useState(true);

  const toggleSideBar = () => {
    setShrinkSideBar(!shrinkSideBar);
  };

  return (
    <CustomSideBar shrinkSideBar={shrinkSideBar}>
      <LogoWrapper icon="chevron_left" toggleSideBar={toggleSideBar} />
      <Navigation />
    </CustomSideBar>
  );
}

export default Sidebar;
