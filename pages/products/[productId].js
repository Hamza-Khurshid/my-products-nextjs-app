import React from "react";
import Product from "../../components/ProductDetail";

export default function MyProduct({ product }) {
  return <Product product={product} />;
}

export async function getStaticProps(context) {
  let { productId } = context.params;
  let product = await fetch(
    `https://fiil-api.herokuapp.com/api/v1/products/${productId}`
  );
  product = await product.json();

  return {
    props: {
      product: product.data,
    },
  };
}

export async function getStaticPaths() {
  let products = await fetch("https://fiil-api.herokuapp.com/api/v1/products");
  products = await products.json();
  products = products.data;

  let paths = products.map((product) => ({
    params: {
      productId: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
