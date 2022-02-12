import React from "react";

export default function Product({ product }) {
  return (
    <div>
      <h1>Product Detail</h1>

      <h3>{product.name}</h3>
    </div>
  );
}
