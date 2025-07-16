import { useState } from "react";
import ListaProductos from "./components/ListaProductos";


function ListaCompras() {
  // Definir el estado para la lista de compras
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // Función para agregar un nuevo producto a la lista
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    const productosFiltrados = productos.filter((_,i) => i !== index);
    setProductos(productosFiltrados);
    // Completar la lógica para eliminar un producto
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        placeholder="Añadir producto"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <ListaProductos
          key={index}
          nombreProducto={producto}
          eliminarProducto={() => eliminarProducto(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;