"use strict"

class Card {
    constructor(number, type) {
        this.number = number;
        this.type = type;
    }

}

class Desk {
    constructor() {
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['spade', 'tambourine', 'clubs', 'heart'];
        for (let i = 0; i < values.length; i++)
            for (let j = 0; j < suits.length; j++)
                Card = values[i] + suits[j];

                }
}
