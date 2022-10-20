import React from 'react'

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
    <div>Data</div>
  )
}

export default Data