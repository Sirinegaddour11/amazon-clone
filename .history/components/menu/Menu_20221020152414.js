import React from 'react'

function Menu(id, title, image) {
  return (
    <div>
      <Image src={image} width={200} height={200} objectFit="contain" />
    </div>
  );
}

export default Menu