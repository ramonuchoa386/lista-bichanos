import React from "react";
import { Icon } from "../../atoms";

function Rating(props) {
  const { stars, icon } = props;

  return (
    <span>
      {stars.map((star, index) => (
        <Icon key={"star-" + index} icon={icon} />
      ))}
    </span>
  );
}

export default Rating;
