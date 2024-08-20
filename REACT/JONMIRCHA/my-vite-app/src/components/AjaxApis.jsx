import React, { Component } from 'react';

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default class AjaxApis extends Component {
    _isMounted = false;

    state = {
        pokemons: [],
    };

    componentDidMount() {
        this._isMounted = true;
        const url = "https://pokeapi.co/api/v2/pokemon/";

        fetch(url)
            .then(res => res.json())
            .then(json => {
                const pokemonPromises = json.results.map(el =>
                    fetch(el.url)
                        .then(res => res.json())
                        .then(json => ({
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.front_default,
                        }))
                );

                return Promise.all(pokemonPromises);
            })
            .then(pokemons => {
                if (this._isMounted) {
                    this.setState({ pokemons });
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <>
                <h2>Peticiones Asíncronas en Componentes Clase</h2>
                {this.state.pokemons.length === 0 ? (<h3>Cargando...</h3>):
                (this.state.pokemons.map(el => (
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                )))}
            </>
        );
    }
}
