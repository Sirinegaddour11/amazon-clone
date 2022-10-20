/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function Data() {
  const PrimeVideo = [
    {
      id: "1",
      title: "LA BOITE NOIRE",
      image:
        "https://www.mauvais-genres.com/33833-thickbox_default/la-boite-noire-affiche-de-film-40x60-cm-2021-pierre-niney-yann-gozlan.jpg",
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



  return (
    <div className="flex">
      {PrimeVideo.map((a) => (
        <Menu key={a.id} id={a.id} title={a.title} image={a.image} />
      ))}
    </div>
  );
}

export default Data;
