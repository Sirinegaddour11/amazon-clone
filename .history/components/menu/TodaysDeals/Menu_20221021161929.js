import Image from "next/image";
import React from "react";

function Menu({ id, title, image,subtitle,  description }) {
  return (
    <div className="">
      <div className="">
        <Image
          alt=""
          src={image}
          width={200}
          height={200}
          objectFit="contain"
        />
        <h1 className="">{title}</h1>
      </div>
    </div>
  );
}

export default Menu;
