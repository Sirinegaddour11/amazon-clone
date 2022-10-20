import Image from 'next/image';
import React from 'react'

function Menu({id, title, image}) {
  return (
    <div>
      <Image alt =""src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
    </div>
  );
}

export default Menu