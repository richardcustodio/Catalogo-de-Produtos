// src/components/ProductForm.jsx
import React, { useState, useEffect } from "react";
import "./ProductForm.css";

function ProductForm({ onAdd, onUpdate, editingProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // Novo estado para a URL da imagem

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setDescription(editingProduct.description);
      setImage(editingProduct.image || ""); // Carrega a imagem para edição
    } else {
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && description) {
      const newProduct = {
        id: editingProduct ? editingProduct.id : Date.now(),
        name,
        price: parseFloat(price),
        description,
        image: image.trim(), // Adiciona a URL da imagem
      };
      if (editingProduct) {
        onUpdate(newProduct);
      } else {
        onAdd(newProduct);
      }
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          placeholder="Nome do Produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Preço:</label>
        <input
          type="number"
          step="0.01"
          id="price"
          placeholder="Preço do Produto"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          placeholder="Descrição do Produto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {/* Campo para a URL da imagem AGORA dentro de form-group */}
      <div className="form-group">
        <label htmlFor="image">URL da Imagem:</label>
        <input
          type="url"
          id="image"
          placeholder="URL da Imagem do Produto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="button submit-button">
          {editingProduct ? "Salvar Edição" : "Adicionar Produto"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={() => onUpdate(null)}
            className="button cancel-button"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
