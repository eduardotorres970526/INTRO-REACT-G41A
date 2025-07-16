const ListaProductos = ({nombreProducto, eliminarProducto}) => {
  return (
    <li>
        {nombreProducto}
        <button
            className='delete-button'
            onClick={eliminarProducto}>
            Eliminar
        </button>
    </li>
  )
}

export default ListaProductos