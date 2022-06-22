import React from "react";

interface IText {
  children: React.ReactNode;
}

const Text = (props: IText) => <p>{props.children}</p>;

export default Text;
