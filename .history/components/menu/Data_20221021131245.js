/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function Data() {
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
      title: "MORTAL KOMBAT",
      image:
        "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.lepolyester.com%2Fune-affiche-pour-us-nouveau-film-dhorreur-de-jordan-peele%2F&psig=AOvVaw3IgLmZaNhSztQvQoU2kIGD&ust=1666440218798000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKDy6eSj8foCFQAAAAAdAAAAABAX",
    },
  ];
  const AmazonBusiness = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
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
    </div>
  );
}

export default Data;
