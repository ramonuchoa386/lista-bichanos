import React from "react";
import { ListItem } from "../";

interface IListInfo {
  temperaments: Array<any>;
}

function ListInfo(props: IListInfo) {
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
