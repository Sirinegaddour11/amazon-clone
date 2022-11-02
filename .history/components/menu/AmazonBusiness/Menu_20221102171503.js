import Image from "next/image";
import React from "react";

function Menu({ id, title, image, description }) {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-2">
      <div className="row-span-3 text-center transition-transform duration-300 transform origin-bottom scale-100 hover:scale-105">
        <Image
          alt=""
          src={image}
          width={800}
          height={300}
          objectFit="contain"
        />
        <h1 className="my-3 text-black uppercase">{title}</h1>
      </div>
      <div className="col-span-2"></div>
      <div className="row-span-2 col-span-2  text-ellipsis overflow-hidden">
        <h3 className="text-left top-2 right-2 text-xs italic text-gray-900">
          {description}
        </h3>
      </div>
    </div>
  );
}

export default Menu;
