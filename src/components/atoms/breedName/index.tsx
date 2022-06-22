import React from "react";

interface IBreedName {
  breedName: string;
}

const BreedName = (props: IBreedName) => {
  const { breedName } = props;

  return <h3>{breedName}</h3>;
};

export default BreedName;
