/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function Data() {

  return (
    <div className="flex">
      {products.map(({ id, title, image }) => (
        <Menu key={id} id={id} title={title} image={image} />
      ))}
    </div>
  );
}

export default Data;
