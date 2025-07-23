import React, { useEffect } from 'react';

function Planeta({ nombre, handleDelete }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`);
    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]);

  return (
  <li>
    {nombre}
    <button onClick={handleDelete}>
      Eliminar
    </button>
  </li>);
}

export default Planeta;