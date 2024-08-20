import React, { Component } from 'react';


class Reloj extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillUnmount() {
        //console.log(3, 'El componente ha sido eliminado del DOM');
    }
    
    render() {
        return (
            <h3>{this.props.hora}</h3>
            )
        }
    }
    
    export default class CicloVida extends Component {
        constructor(props) {
            super(props);
            this.state = {
                hora: new Date().toLocaleTimeString(),
            visible: false,
        }
        this.temporizador = null
        //console.log(0, 'El componente se inicializa, aún NO está en el DOM');
    }
    
    
    componentDidUpdate(prevProps, prevState) {
        //console.log(2, 'El estado o las props del componente han cambiado');
        //console.log(prevProps);
        //console.log(prevState);
    }
    
    componentDidMount() {
        //console.log(1, "El componente ya se encuentra en el DOM");
    }
    ticktak = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000)
    }

    iniciar = () => {
        this.ticktak();
        this.setState({
            visible: true,
        })
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false,
        })
    }
    render() {
        //console.log(4, 'El componente se redibuja por cualquier cambio');
        return (
            <>
                <h2>Ciclo de Vida de los Componentes de Clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        );
    }
}