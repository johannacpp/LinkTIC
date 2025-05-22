import React, { useState } from "react";
import axios from "axios";

const AddProduct = ({ onCancel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/products", { name, description, price })
      .then((response) => {
        alert("Producto agregado con éxito");
        window.location.reload();
      })
      .catch((error) => {
        alert("Error al agregar el producto");
        console.error(error);
      });
  };

  return (
    <div className="add-product-container">
      <h3>Agregar Producto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="add-edit-btn">Agregar</button>
          <button className="delete-btn" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
