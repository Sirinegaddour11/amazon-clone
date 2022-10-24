/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

function Menu({ id, title, image }) {
  return (
    <div className="space-y-5 space-x-5 sp text-center">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3 text-black">{title}</h4>
    </div>
  );
}

export default Menu;
