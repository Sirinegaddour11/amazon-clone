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
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Menu
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default Data;
