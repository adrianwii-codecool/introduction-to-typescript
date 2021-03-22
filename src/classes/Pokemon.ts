import { iPokemon } from "../interfaces/iPokemon";

export class Pokemon implements iPokemon {
    name: string;
    length: number;
    weight: number;

    resistance: number = 0;
    weakness: number = 0;
    retreat: number = 0;

    constructor(name: string, length: number, weight: number) {
        this.name = name;
        this.length = length;
        this.weight = weight;
    }

    listForces(): string {
        return `weight: ${this.weight}, length: ${this.length}, resistance: ${this.resistance},`
            + `weakness: ${this.weakness}, retreat: ${this.retreat}`;
    }
}