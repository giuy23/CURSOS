import React from 'react'
import { useParams } from 'react-router-dom'

const Usuario = () => {
    // let params = useParams();
    // console.log(params);
    let {username} = useParams();
    // console.log(username);
  return (
    <div>
        <h3>Perfil del Usuario</h3>
        <p>Nombre de <b>{username}</b></p>
    </div>
  )
}

export default Usuario