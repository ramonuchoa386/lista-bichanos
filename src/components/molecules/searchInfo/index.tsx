import React from "react";
import { ListInfo } from "../";
import { Text, BreedName } from "../../atoms";

interface ISearchInfo {
  breedName: string;
  breedDescription: string;
  temperaments: Array<any>;
}

const SearchInfo = (props: ISearchInfo) => {
  const { breedName, breedDescription, temperaments } = props;

  return (
    <div>
      <BreedName breedName={breedName} />
      <Text>{breedDescription}</Text>
      <ListInfo temperaments={temperaments} />
    </div>
  );
};

export default SearchInfo;
