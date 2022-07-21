import React from "react";
import Products from "./Products";

export default function ProductList(props) {
  return props.products.map((products, i) => {
    return (
      <Products
        products={products}
        incrementQuantity={props.incrementQuantity}
        key={i}
        index={i}
      />
    );
  });
}
