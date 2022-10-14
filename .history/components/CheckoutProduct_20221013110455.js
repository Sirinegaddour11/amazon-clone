/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div>
            {}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
