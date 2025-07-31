import { useReducer, useRef, useCallback, useEffect } from "react";

const initialState = {
  count: 0,
  history: []
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        history: [...state.history, state.count]
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, state.count]
      };
    case "undo":
      if (state.history.length === 0) return state;
      const prevCount = state.history[state.history.length - 1];
      return {
        count: prevCount,
        history: state.history.slice(0, -1)
      };
    case "reset":
      return initialState;
    case "load":
      return action.payload; // Cargar desde localStorage
    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
  const localData = localStorage.getItem("contador-inventario");
  return localData ? JSON.parse(localData) : initialState;
});

  const incrementBtnRef = useRef(null);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  // Enfocar el botón al inicio
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  // Recuperar inventario al cargar la app
  useEffect(() => {
    const dataGuardada = localStorage.getItem("contador-inventario");
    if (dataGuardada) {
      const datos = JSON.parse(dataGuardada);
      dispatch({ type: "load", payload: datos });
    }
  }, []);

  // Guardar inventario en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("contador-inventario", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => dispatch({ type: "undo" })}>Deshacer</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((value, index) => (
          <li key={index}>Valor anterior: {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterGame;
