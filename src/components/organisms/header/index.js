import React from "react";
import { Profile } from "../../molecules";
import { Header as CustomHeader } from "./styles";

function Header(props) {
  const { pageTitle } = props;

  return (
    <CustomHeader>
      <h2>{pageTitle}</h2>
      <Profile />
    </CustomHeader>
  );
}

export default Header;
