/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function Data() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getproducts = async () =>
      await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json().then((a) => setProducts(a))
      );
    getproducts();
    console.log("data=", products)
  }, []);

  return (
    <div className="flex">
      {products.map(({ id, title, image }) => (
        <Menu key={id} id={id} title={title} image={image} />
      ))}
    </div>
  );
}

export default Data;
