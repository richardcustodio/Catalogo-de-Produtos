import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, onEdit, onDelete }) {
  if (!products || products.length === 0) {
    return <p className="no-products">Nenhum produto cadastrado.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductList;
