import React, { Component } from "react";

export class EventosES7 extends Component {
    state = {contador: 0,
    };

    //Arrow functions
    sumar = () => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = () => {
        if (this.state.contador > 0) {
            this.setState({
                contador: this.state.contador - 1,
            });
        } else {
            alert("El número mínimo es 0")
        }

    }
    render() {
        return (
            <div className="">
                <hr />
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// function Boton(props) {
//     return(
//         <button onClick={props.myOnClick}>Botón hecho componente</button>
//     )
// }


// const Boton = (props) => (
//     <button onClick={props.myOnClick}>Botón hecho componente</button>
// )


const Boton = ({myOnClick}) => (
    <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component{
    handleClick = (e, mensaje) => {
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(mensaje);
    }


    render(){
        return(
            <div className="">
                <h2>Más sobre eventos</h2>
                <button onClick={(e) => 
                    this.handleClick(e, "Hola pasando parámetro desde un evento")}
                >Saludar</button>

                {/* {Evento personalizado} */}
                {/* <Boton onClick={(e) => 
                    this.handleClick(e, "Hola pasando parámetro desde un evento")}>
                    </Boton> */}
                <Boton myOnClick={(e) => 
                    this.handleClick(e, "Hola pasando parámetro desde un evento")}>
                </Boton>  
            </div>
        )
    }
}