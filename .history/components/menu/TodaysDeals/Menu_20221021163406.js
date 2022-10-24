/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
function Menu({ id, title, image, subtitle, description }) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 growing-hover">
    
      <Image src={image} width={200} height={200} objectFit="contain" />
     
      <div className="flex">
       
      </div>
      <p className="text-xs my-2 line-clamp-2 text-slate-900">{description}</p>
      

  
      <button  className="mt-auto button">
        Click
      </button>
    </div>
  );
}

export default Menu;
