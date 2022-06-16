import React from "react";
import { Img } from "../../atoms";
import { SearchInfo } from "../";

function Result(props) {
  const { imageSrc, alterText, breedName, breedDescription, temperaments } =
    props;

  return (
    <article>
      <Img
        imageSrc={imageSrc}
        width="200px"
        height="200px"
        alterText={alterText}
        className="catThumb"
      />
      <SearchInfo
        breedName={breedName}
        temperaments={temperaments}
        breedDescription={breedDescription}
      />
    </article>
  );
}

export default Result;
