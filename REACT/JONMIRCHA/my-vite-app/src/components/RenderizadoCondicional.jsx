import React, {Component} from "react";

function Login(){
    return(
        <div className="">
            <h3>Login</h3>
        </div>
    );
}

function Logout(){
    return(
        <div className="">
            <h3>Logout</h3>
        </div>
    );
}

export default class RenderizadoCondicional extends Component {
    constructor(props){
        super(props);
        this.state = {
            session: true,
        }
    }
    render(){
        return(
            <div className="">
                <h2>Renderizado Condicional</h2>
                {this.state.session ? <Login></Login> : <Logout></Logout>}
            </div>
        );
    }
}