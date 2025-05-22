import React, { useState } from "react";
import axios from "axios";

const EditProduct = ({ product, onSave, onCancel }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);

  const handleSave = () => {
    axios
      .put(`http://localhost:8080/products/${product.id}`, {
        name,
        price,
        description,
      })
      .then((response) => {
        onSave(response.data);
        alert("Producto Editado");
      })
      .catch((error) => {
        console.error("Error al actualizar el producto:", error);
        alert("Error al actualizar el producto");
      });
  };

  return (
    <div>
      <h3>Editar Producto</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
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
        <div>
          <label>Precio:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        </div>
        <div className="button-container">
          <button type="submit" className="add-edit-btn">Guardar</button>
          <button type="button" className="delete-btn" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
