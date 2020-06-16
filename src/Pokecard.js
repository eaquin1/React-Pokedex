import React from "react";
import "./Pokecard.css"
const POKE_API = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`;
    return (
        <div className="Pokecard">
            <h4>{props.name}</h4>
            <img src={imgSrc} alt={props.name} />
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
        </div>
    );
}

export default Pokecard;
