/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

function Menu({ id, title, image }) {
  return (
    <div className="grid-flow-row-dense">
      <div className=" space-y-reverse text-center transition-transform duration-300 transform origin-bottom scale-100 hover:scale-105">
        <Image src={image} width={200} height={200} objectFit="contain" />
        <h4 className="link my-3 text-black">{title}</h4>
      </div>

      <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Menu;
