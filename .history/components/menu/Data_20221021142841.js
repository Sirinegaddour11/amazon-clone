/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Banner from "../Banner";
import Menu from "./Menu";

function Data({ menu }) {
  menu = { name: "PrimeVideo" };
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

  const TodayDeals = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
    },
  ];

  const Electronics = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
    },
  ];

  const FoodsGrocery = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
    },
  ];

  const Prime = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
    },
  ];

  const BuyAgain = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
    },
  ];
  const ShopperToolkit = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
    },
  ];

  const HealthPersonalCare = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
    },
  ];

  return (
    <div className="flex">
      {PrimeVideo.map((a) => (
        <Menu key={a.id} id={a.id} title={a.title} image={a.image} />
      ))}
      <div className="relative carousel-wrapper ">
        <Carousel>
          <img
            src="https://links.papareact.com/dyz"
            alt=""
            className="min-w-0 "
            width={1000}
            height={2500}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Data;
