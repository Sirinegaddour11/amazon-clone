import Image from "next/image";
import React from "react";

function Menu({ id, title, image, description }) {
  return (
    <div className=" flex ">
      <div className="  text-center transition-transform duration-300 transform origin-bottom scale-100 hover:scale-105">
        <Image
          alt=""
          src={image}
          width={800}
          height={300}
          objectFit="contain"
        />
        <h1 className="link my-3 text-black">{title}</h1>
        <div className=" top-2 right-2 text-sm italic text-gray-400">
          <h3 className="">{description}</h3>
        </div>
      </div>
    </div>
  );
}

export default Menu;