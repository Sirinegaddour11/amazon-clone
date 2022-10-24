import Image from "next/image";
import React from "react";

function Menu({ id, title, image, description }) {
  return (
    <div className="">
      <div className=" row-span-3  text-center transition-transform duration-300 transform origin-bottom scale-100 hover:scale-105">
        <Image
          alt=""
          src={image}
          width={800}
          height={300}
          objectFit="contain"
        />
        <h1 className="my-3 text-black uppercase">{title}</h1>
      </div>
    
      
    </div>
  );
}

export default Menu;
