import React from "react";

const LinkBtn = (props) => {
  const { address, title, icon, pageTitle } = props;

  return (
    <a href={address} title={title}>
      {icon} {pageTitle}
    </a>
  );
};

export default LinkBtn;
