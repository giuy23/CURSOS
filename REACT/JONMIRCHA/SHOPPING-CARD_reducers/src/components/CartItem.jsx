import React from 'react'

const CartItem = ({data, delFromcart}) => {
    const {id, name, price, quantity} = data;
  return (
    <div style={{borderBottom: "thin solid gray"}}>
        <h4>{name}</h4>
        <h5>${price}.00 x {quantity} = ${quantity*price}</h5>
        <button onClick={() => delFromcart(id)}>Eliminar</button>
        <button onClick={() => delFromcart(id, true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem