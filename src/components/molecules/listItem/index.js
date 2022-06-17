import React from "react";
import { Text } from "../../atoms";
import { Rating } from "../";

function ListItem(props) {
  const { stars, icon, ratingType } = props;

  return (
    <li>
      <Text>{ratingType}</Text>
      <Rating stars={stars} icon={icon} />
    </li>
  );
}

export default ListItem;
