import React from "react";
import { ListItem } from "../";

function ListInfo(props) {
  const { temperaments } = props;

  return (
    <ul>
      {temperaments.map((temperament, index) => (
        <ListItem
          key={"temperament-" + index}
          ratingType={temperament.ratingType}
          stars={temperament.stars}
          icon="star_border"
        />
      ))}
    </ul>
  );
}

export default ListInfo;
