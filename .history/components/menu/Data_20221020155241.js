import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function Data() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getproducts = async () =>
      await fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
        res.json().then((a) => setProducts(a))
      );
    getproducts();
    console.log
  }, []);

  return (
    <div>
      {products.map(({ id, title, image }) => (
        <Menu key={id} id={id} title={title} image={image} />
      ))}
    </div>
  );
}

export default Data;
