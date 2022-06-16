import React from "react";

const Img = (props) => {
  const { imageSrc, alterText, width, height, className } = props;

  return (
    <img
      src={imageSrc}
      alt={alterText}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Img;
