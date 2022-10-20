import React, { useEffect, useState } from 'react'

function Data() {

      const [products, setProducts] = useState([]);
      useEffect(() => {
        const getproducts = async () =>
          await fetch("https://api.storerestapi.com/products").then((res) =>
            res.json().then((data) => setProducts(data))
          );
        getproducts();
      }, []);
  return (
    <div>
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
        {
           
            {id},
            {title}
           {price}
            description={description}
            category={category}
            image={image}
        } 
        ))}
    </div>
  );
}

export default Data