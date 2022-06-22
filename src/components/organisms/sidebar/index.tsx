import React from "react";
import { LogoWrapper, Navigation } from "../../molecules";
import { CustomSideBar } from "./styles";

const Sidebar: React.FC = () => {
  const [shrinkSideBar, setShrinkSideBar] = React.useState(false);

  const toggleSideBar = () => {
    setShrinkSideBar(!shrinkSideBar);
  };

  return (
    <CustomSideBar className={shrinkSideBar && "shrink"}>
      <LogoWrapper
        icon={!shrinkSideBar ? "chevron_left" : "chevron_right"}
        toggleSideBar={toggleSideBar}
      />
      <Navigation />
    </CustomSideBar>
  );
};

export default Sidebar;
