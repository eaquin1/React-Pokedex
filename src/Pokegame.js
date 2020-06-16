import React from "react"
import Pokedex from "./Pokedex"

function Pokegame(props) {
    let hand1 = []
    let hand2 = [...props.pokemon]

    while (hand1.length < hand2.length){
        //take a random pokemon from hand 2, add it to hand 1
        let randIdx = Math.floor(Math.random() * hand2.length)
        let randPokemon = hand2.splice(randIdx, 1)[0] 
        hand1.push(randPokemon)
    }

    let experience1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    let experience2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

    return (
        <div>
            <Pokedex pokemon={hand1} exp={experience1} isWinner={experience1 > experience2} />
            <Pokedex pokemon={hand2} exp={experience2} isWinner={experience2 > experience1} />
        </div>
    )

}

export default Pokegame