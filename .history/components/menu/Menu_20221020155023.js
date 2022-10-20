import Image from 'next/image';
import React from 'react'

function Menu({id, title, image}) {
  return (
    <div>
    
      <h4 className="my-3">{title}</h4>
    </div>
  );
}

export default Menu