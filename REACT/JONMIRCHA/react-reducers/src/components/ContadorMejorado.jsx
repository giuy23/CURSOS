import { useReducer } from "react";
import { contadorInit, contadorInithialState, contadorReducer } from "../reducers/contadorReducer";
import { TYPES } from "../actions/contadorActions";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(contadorReducer, contadorInithialState, contadorInit);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>Contador Mejorado REDUCER</h2>
      <h3>{state.count}</h3>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
    </div>
  );
};

export default ContadorMejorado;
