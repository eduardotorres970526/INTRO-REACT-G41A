// src/App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './components/Planeta';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  // Efecto de montaje y desmontaje
  useEffect(() => {
    console.log("\u00a1El panel de control est\u00e1 listo!");

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
    console.log("\u00a1Combustible actualizado!");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    setPlanetasVisitados(prev => [...prev, {id: crypto.randomUUID(), nombre:`Planeta ${prev.length + 1}`}]);
  };

  const eliminarPlaneta = (id) => {
    setPlanetasVisitados(prev => prev.filter(planeta => planeta.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Panel de Control</h1>
      <p>Distancia: {distancia} km</p>
      <p>Combustible: {combustible}%</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar}>Aterrizar</button>

      <h2>Planetas Visitados</h2>
      <ul>
        {planetasVisitados.map((planeta) => (
            <Planeta 
            key={planeta.id}
            nombre={planeta.nombre}
            handleDelete={() => eliminarPlaneta(planeta.id)}
            />
        ))}
      </ul>
    </div>
  );
}

export default App;
