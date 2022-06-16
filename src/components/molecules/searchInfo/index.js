import React from "react";
import { ListInfo } from "../";
import { Text, BreedName } from "../../atoms";

function SearchInfo(props) {
  const { breedName, breedDescription, temperaments } = props;

  return (
    <div>
      <BreedName breedName={breedName} />
      <Text>{breedDescription}</Text>
      <ListInfo temperaments={temperaments} />
    </div>
  );
}

export default SearchInfo;
