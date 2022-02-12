import Link from "next/link";
import React from "react";

export default function Products({ products }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {products.map((product) => (
        <div
          key={product.id.toString()}
          style={{
            backgroundColor: "#eee",
            height: 200,
            width: "90%",
            display: "flex",
            marginBottom: 20,
          }}
        >
          <img
            src={product.imageURL}
            style={{ height: 100, width: 100, marginRight: 10 }}
          />
          <Link href={`/products/${product.id}`}>
            <h1 style={{ cursor: "pointer" }}>{product.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
