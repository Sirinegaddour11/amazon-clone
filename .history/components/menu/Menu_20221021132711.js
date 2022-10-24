/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

function Menu({ id, title, image }) {
  return (
    <div className="grid-flow-row-dense">
      <div className=" space-y-reverse text-center transition-transform duration-300 transform origin-bottom scale-100 hover:scale-105">
        <Image src={image} width={200} height={200} objectFit="contain" />
        <h4 className="link my-3 text-black">{title}</h4>
      </div>

      
    </div>
  );
}

export default Menu;
