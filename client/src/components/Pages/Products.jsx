import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

import { useParams } from 'react-router-dom';

function Products() {
  // משתנה המכיל את ה-id הנוכחי מה-URL
  const { categoryid } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));

    setProducts(storedProducts); //all products
    // if (storedProducts) {
    //   setProducts(storedProducts);
    // } else {
    //   fetch(`http://localhost:3500/api/products/${categoryid}`) // Change the URL to match your server route
    //     .then(response => response.json())
    //     .then(data => {
    //       setProducts(data);
    //       localStorage.setItem("products", JSON.stringify(data));
    //     })
    //     .catch(error => {
    //       console.error('Error fetching products:', error);
    //     });
    // }
  }, []);

  
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
