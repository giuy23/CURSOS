import { useReducer } from "react";

const inithialState = { count: 0 };

const init =  (inithialState) => {
    return {
        count: inithialState.count + 100
    }
}

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };
    case TYPES.RESET:
      return inithialState;
    default:
      return state;
  }
}

const Contador = () => {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, inithialState, init);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>Contador REDUCER</h2>
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

export default Contador;
