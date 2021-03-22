import { Pokemon } from "./Pokemon";

export class Pokedex {
    id: number;
    pokemons: Pokemon[] = [];

    constructor(id: number, pokemons: Pokemon[] = []) {
        this.id = id;
        this.pokemons = pokemons;
    }

    addPokemon(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
    }

    display(pokemonsContainer: HTMLDivElement) {
        console.log("display");
        for(let pokemon of this.pokemons) {
            const card = document.createElement('div');
            card.classList.add("card");
            const body = document.createElement('div');
            body.classList.add("card-body");
            const title = document.createElement('h5');
            title.classList.add("card-title");
            const description = document.createElement('p');
            description.classList.add("card-text");
            
            title.textContent = pokemon.name;
            description.textContent = pokemon.listForces();

            body.appendChild(title);
            body.appendChild(description);
            card.appendChild(body)
            pokemonsContainer.append(card);
        }
    }
}