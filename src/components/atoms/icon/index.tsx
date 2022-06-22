import React from "react";

interface IIcon {
  icon: string;
}

const Icon = (props) => {
  const { icon } = props;

  return <i className="material-icons">{icon}</i>;
};

export default Icon;
