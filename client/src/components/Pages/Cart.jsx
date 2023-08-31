import React, { useState, useEffect } from "react";
import Product from "./Product"; // הגיע מהקובץ הנכון
import ProductCard from "./ProductCard"; // הגיע מהקובץ הנכון

function CartPage() {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3500/api/carts/3")
      .then((response) => response.json())
      .then((data) => {
        setCartData(data);
        sessionStorage.setItem("cartData", JSON.stringify(data));
      })
      .catch((error) => console.error("Error fetching cart data:", error));
  }, []);

  return (
    <div>
      <h2>Cart Page</h2>
      {cartData ? (
        <div>
          <h3>Cart Content:</h3>
          {cartData.products.length > 0 ? (
            <div>
              {cartData.products.map((cartProduct, index) => (
                <ProductCard
                  key={index}
                  product={cartProduct.product}
                  cartQuantity={cartProduct.quantity}
                />
              ))}
            </div>
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
      ) : (
        <p>Loading cart data...</p>
      )}
    </div>
  );
}

export default CartPage;
