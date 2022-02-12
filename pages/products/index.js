import React from "react";
import Products from "../../components/Products";

export default function products({ products }) {
  return <Products products={products} />;
}

export async function getStaticProps() {
  let products = await fetch("https://fiil-api.herokuapp.com/api/v1/products");
  products = await products.json();

  return {
    props: {
      products: products.data,
      total: products.total,
    },
  };
}
