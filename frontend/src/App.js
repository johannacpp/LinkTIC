import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import './App.css';

function App() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const toggleAddProduct = () => {
    setShowAddProduct(!showAddProduct);
  };

  return (
    <div className="App">
      <h2>Gestión de Productos</h2>
      <div>
        {!showAddProduct &&<button onClick={toggleAddProduct} type="submit" className="add-edit-btn">Agregar</button>}
      </div>
      {showAddProduct && <AddProduct onCancel={toggleAddProduct}/>}
      <ProductList />
    </div>
  );
}

export default App;
