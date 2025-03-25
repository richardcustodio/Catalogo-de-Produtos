// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      {product.image && (
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>
      )}
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">Preço: R$ {product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <div className="product-actions">
        <button
          onClick={() => onEdit(product.id)}
          className="button edit-button"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="button delete-button"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
