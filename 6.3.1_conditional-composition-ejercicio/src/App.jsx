import { useState, useEffect } from 'react';
import InputNumber from './components/InputNumber';
import RestartButton from './components/RestartButton';
import Message from './components/Message';
import './App.css';

function App() {
  
const [numGuardado, setNumGuardado] = useState(null);
const [respuesta, setRespuesta] = useState("");
const [numeroIngresado, setNumeroIngresado] = useState("")


   const generarNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    setNumGuardado(numeroAleatorio);
    console.log("Número secreto", numeroAleatorio)
   }


   useEffect(() => {
      generarNumero()
   },[]) 

   const manejarCambio = (e) => {
     setNumeroIngresado(e.target.value)
   };

   const verificarNumero = () => {
    const manejarNumero = parseInt(numeroIngresado);

       if (isNaN(manejarNumero)) {
      setRespuesta('Por favor ingresa un número válido.');
    } else if (manejarNumero === numGuardado) {
      setRespuesta('¡Correcto! 🎉 Adivinaste el número.');
    } else if (manejarNumero < numGuardado) {
      setRespuesta('El número es mayor');
    } else {
      setRespuesta('El número es menor');
    }

    setNumeroIngresado('');
   }

   const reiniciarTodo = () => {
    generarNumero()
    setNumeroIngresado("");
    setRespuesta("");
   }


  return (
    <div>
      <h1>Bienvenido al juego:</h1>

      <h2><b>Adivina el número entre 1 y 100!!</b></h2>
      <InputNumber
      numeroNuevo={numeroIngresado}
      handleChange={manejarCambio}
      />
      <button onClick={verificarNumero}>Adivinar número</button>
      <Message
      mensaje={respuesta}
      />
      <RestartButton reestablecer={reiniciarTodo}/>
     </div>
  )
 
}

export default App
