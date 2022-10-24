
import Image from "next/image";
import React from "react";

function Menu({ id, title, image }) {
  return (
    <div className="">
      <div className="  text-center transition-transform duration-300 transform origin-bottom scale-100 hover:scale-105">
        <Image alt="" src={image} width={800} height={300} objectFit="contain" />
        <h4 className="link my-3 text-black">{title}</h4>
      </div>
  
    </div>
  );
}

export default Menu;
