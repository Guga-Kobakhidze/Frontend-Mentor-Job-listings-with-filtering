import React from "react";
import { productProps } from "../../interfaces/interface";

const Card: React.FC<productProps> = ({ product }) => {
  return (
    <>
      <img src={product.logo} alt="something" />
      <h1>{product.company}</h1>
    </>
  );
};

export default Card;
