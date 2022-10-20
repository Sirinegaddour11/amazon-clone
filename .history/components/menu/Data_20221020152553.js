import React, { useEffect, useState } from "react";

function Data() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getproducts = async () =>
      await fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
        res.json().then((data) => setProducts(data))
      );
    getproducts();

  }, []);

  return (
    <div>
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <M
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
