import React, { memo,useMemo } from "react";

const ContadorHijo = ({ Contador, sumar, restar }) => {
  // let superNumero = 0;
  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }
  const superNumero = useMemo(() => {
      let numero = 0;
        for (let i = 0; i < 1000000000; i++) {
          numero++;
        }
      
        return numero
  }, [])
  console.log("HIJO CONTADOR SE RENDERIZA");
  return (
    <div>
      <h2>Hijo del Contador</h2>
      <h3>{Contador}</h3>

      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
