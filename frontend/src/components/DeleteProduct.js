import axios from "axios";

const DeleteProduct = ({ productId, onDelete }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/products/${productId}`)
      .then(() => {
        onDelete(productId);
        alert("Producto Eliminado");
      })
      .catch((error) => {
        console.error("Error al eliminar el producto:", error);
        alert("Error al eliminar el producto");
      });
  };

  return (
      <button onClick={handleDelete} className="delete-btn">Eliminar</button>
  );
};

export default DeleteProduct;
