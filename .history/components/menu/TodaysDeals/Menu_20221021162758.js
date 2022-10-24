import Image from "next/image";
import React from "react";

function Menu({ id, title, image, subtitle, description }) {
  return (
    <div className=" relative flex flex-col m-5 bg-white z-30 p-10">
      <div className="">
        <h1 className="text">{title}</h1>
        <Image
          alt=""
          src={image}
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Menu;
