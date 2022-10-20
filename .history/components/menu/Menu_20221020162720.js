/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React from 'react'

function Menu({id, title, image}) {
  return (
    <div>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
    </div>

      <div className="dropdown-content">
            {links.map((link) => (
              <a key={link.title} href={link.url} className="growing-hover">
                {link.title}
              </a>
            ))}
          </div>
  );
}

export default Menu