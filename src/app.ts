import { Pokedex } from "./classes/Pokedex.js";
import { Pokemon } from "./classes/Pokemon.js";

const pokedexElement = document.querySelector('.pokemons') as HTMLDivElement;

const pokedex = new Pokedex(1245);

console.log(pokedex);
const bulbasaur = new Pokemon('Bulbasaur', 6.7, 221);
const pikachu = new Pokemon('Pikachu', 1.4, 13);

pokedex.addPokemon(bulbasaur);
pokedex.addPokemon(pikachu);

pokedex.display(pokedexElement);