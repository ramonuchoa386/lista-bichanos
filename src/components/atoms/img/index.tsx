import React from "react";

interface IImg extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageSrc: string;
  alterText: string;
}

const Img = (props: IImg) => {
  const { imageSrc, alterText } = props;

  return <img src={imageSrc} alt={alterText} {...props} />;
};

export default Img;
