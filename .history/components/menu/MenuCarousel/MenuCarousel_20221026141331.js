/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "./Menu";
function MenuCarousel() {
  const PrimeVideo = [
    {
      id: "1",
      title: "BULLET TRAIN",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
    },

    {
      id: "2",
      title: "LA BOITE NOIRE",
      image:
        "https://www.filmjabber.com/movie-poster-thumbs/bullet-train-movie-poster-6974.jpg",
    },
    {
      id: "3",
      title: "US",
      image:
        "http://www.lepolyester.com/wp-content/uploads/2018/12/us-1-655x1024.jpg",
    },
    {
      id: "4",
      title: "SAMARITAN",
      image: "https://katorza.fr/files/images/1663919091_691.jpg",
    },
  ];

  return (
    <div className=" carousel-wrapper ">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {PrimeVideo.map(({ id, title, image }) => (
          <Menu key={id} id={id} title={title} image={image} />
        ))}
      </Carousel>
    </div>
  );
}

export default MenuCarousel;
