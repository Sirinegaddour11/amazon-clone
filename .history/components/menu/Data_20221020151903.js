import React, { useEffect, useState } from "react";

function Data() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getproducts = async () =>
      await fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
        res.json().then((data) => setProducts(data))
      );
    getproducts();

  }, [products]);

  return (
    <div>
      {/* {products
       
        .map(({ image }) => (
       
            // image={image}
        
        ))} */}
    </div>
  );
}

export default Data;
