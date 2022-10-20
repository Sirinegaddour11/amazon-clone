import React, { useEffect, useState } from "react";

function Data() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getproducts = async () =>
      await fetch("https://api.storerestapi.com/products").then((res) =>
        res.json().then((data) => setProducts(data))
      );
    getproducts();
    console.log("data", products);
  }, [products]);

  return (
    <div>
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
       
            image={image}
          />
        ))}
    </div>
  );
}

export default Data;
