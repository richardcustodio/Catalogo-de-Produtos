// src/App.jsx
import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";
import "./styles.css";
import lightBackgroundImage from "./assets/DALL·E-2025-03-25-16.48.jpg";
import darkBackgroundImage from "./assets/DALL·E-2025-03-25-16.48_1.jpg";

function App() {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.backgroundImage =
      theme === "dark"
        ? `url(${darkBackgroundImage})`
        : `url(${lightBackgroundImage})`;
  }, [theme]); // Removidas lightBackgroundImage e darkBackgroundImage do array

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    if (updatedProduct) {
      const updatedList = products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      setProducts(updatedList);
      setEditingProduct(null);
    } else {
      setEditingProduct(null);
    }
  };

  const deleteProduct = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      const newList = products.filter((product) => product.id !== id);
      setProducts(newList);
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit);
  };

  return (
    <div className="app-container">
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === "light" ? "Ativar Tema Escuro" : "Ativar Tema Claro"}
      </button>
      <h1 className="app-title">Catálogo de Produtos</h1>
      <div className="form-container">
        <ProductForm
          onAdd={addProduct}
          onUpdate={updateProduct}
          editingProduct={editingProduct}
        />
      </div>
      <h2 className="app-subtitle">Lista de Produtos</h2>
      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default App;
