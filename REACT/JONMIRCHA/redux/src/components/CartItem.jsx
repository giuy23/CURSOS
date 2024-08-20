import React from 'react'

const CartItem = ({data, delOneFromcart, delAllFromcart}) => {
    const {id, name, price, quantity} = data;
  return (
    <div style={{borderBottom: "thin solid gray"}}>
        <h4>{name}</h4>
        <h5>${price}.00 x {quantity} = ${quantity*price}</h5>
        <button onClick={() => delOneFromcart(id)}>Eliminar</button>
        <button onClick={() => delAllFromcart(id, true)}>Eliminar Todos</button>
    </div>
  )
}

export default CartItem