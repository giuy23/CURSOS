import React, {Component} from "react";

export default class Eventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
    }

    sumar(){
        this.setState({
            contador: this.state.contador + 1,
        });        
    }

    restar(){
        if (this.state.contador > 0) {
            this.setState({
            contador: this.state.contador - 1,
        });
        } else {
            alert("El número mínimo es 0")
        }
        
    }
    render(){
        return (
            <div className="">
                <h2>Eventos en Componentes de Clase ES6</h2> 
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}