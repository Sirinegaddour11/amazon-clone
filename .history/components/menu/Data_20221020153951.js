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
  }, []);

  return (
    <div>
      {products.map(({ id, title, image }) => (
          <Menu
      
            id={id}
            title={title}
            image={image}
          />
        ))}
    </div>
  );
}

export default Data;
