/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React from 'react'

function Menu({id, title, image}) {
  return (
    <div>
      <Image src={image}  objectFit="contain" />
      <h4 className="my-3">{title}</h4>
    </div>
  );
}

export default Menu