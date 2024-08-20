import React, { useState, useCallback } from 'react';
import ContadorHijo from './ContadorHijo';

const Contador = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // const sumar = () => {
    //     setCount(count + 1);
    // }
    const sumar = useCallback(
      () => {
        setCount(count + 1);
      },
      [count],
    )
    

    // const restar = () => {
    //     count === 0 ? alert("No se puede restar a menor que cero") : setCount(count - 1);
    // }
    const restar = useCallback(
        () => {
            count === 0 ? alert("No se puede restar a menor que cero") : setCount(count - 1);
        },
        [count],
      )

    const handleInput = (e) => {
        setInput(e.target.value)
    }
  return (
    <div>
        <h2>Contador</h2>
        <h3>{count}</h3>
        <input type="text" onChange={handleInput} value={input} />
        <br /><br />
        <nav>
            <button onClick={sumar} >+</button>
            <button onClick={restar} >-</button>
        </nav>

        <ContadorHijo Contador={count} sumar={sumar} restar={restar} />
    </div>
  )
}

export default Contador