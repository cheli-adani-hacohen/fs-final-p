import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Product from './Product';

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

  
  const onAddToCart = (productId) => {
    const updatedCartData = JSON.parse(sessionStorage.getItem("cartData"));
    // ... כאן יש לעדכן את updatedCartData בהתאם למוצר שנבחר להוספה לעגלה
    sessionStorage.setItem("cartData", JSON.stringify(updatedCartData));
  };
  const handleAddToCart = (productId) => {

  };

  const handleAddToWishlist = (productId) => {
    // Logic to add the product to the wishlist
  };

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist} />
        // <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
