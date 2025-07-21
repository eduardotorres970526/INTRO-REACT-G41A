import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './components/Planeta';

function App() {
  // Estado de la nave
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  // Efecto al montar el componente
  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const intervalo = setInterval(() => {
      setDistancia(prev => prev + 10);
      setCombustible(prev => (prev > 0 ? prev - 5 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  // Efecto cuando cambia el combustible
  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  // Memoización del mensaje de estado
  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  // Función para aterrizar
  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    setPlanetasVisitados(prev => [
      ...prev,
      `Planeta ${planetasVisitados.length + 1}`,
    ]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Control</h1>
      <p>Distancia: {distancia} km</p>
      <p>Combustible: {combustible}%</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar}>Aterrizar</button>

      <h2>Planetas Visitados</h2>
      <ul>
        {planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))}
      </ul>
    </div>
  );
}

export default App;
