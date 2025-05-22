import React, { useState, useEffect } from "react";
import axios from "axios";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?page=${page}&size=${size}`)
      .then((response) => {
        setProducts(response.data.content);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al cargar los productos.");
        setLoading(false);
        console.error("Error fetching products", error);
      });
  }, [page, size]);

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setProductToEdit(product);
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsEditing(false);
    setProductToEdit(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setProductToEdit(null);
  };

  return (
    <div>
      <h3>Lista de Productos</h3>

      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isEditing && (
        <>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>
                    <button onClick={() => handleEdit(product)} className="add-edit-btn">Editar</button>
                    <DeleteProduct productId={product.id} onDelete={handleDelete} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
          <div className="paginador">
            <button
              className="add-edit-btn"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 0}
            >
              {"<<"}
            </button>
            <span>
              Página {page + 1} de {totalPages}
            </span>
            <button
              className="add-edit-btn"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages - 1}
            >
              {">>"}
            </button>
            <span>Mostrar por página: </span>
            <select onChange={(e) => setSize(Number(e.target.value))} value={size}>
              <option value={1}>1</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
            </select>
          </div>
        </>
      )}

      {isEditing && (
        <EditProduct
          product={productToEdit}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default ProductList;
