class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}

class Deck {
    constructor() {
        this.ranks = ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        this.cards = [];

        for (let suit of this.suits) {
            for (let rank of this.ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }

    dealToPlayers() {
        let player1Hand = [];
        let player2Hand = [];

        while (player1Hand.length < 6) {
            let card = this.deal();
            if (!player1Hand.includes(card) && !player2Hand.includes(card)) {
                player1Hand.push(card);
            }
        }

        while (player2Hand.length < 6) {
            let card = this.deal();
            if (!player1Hand.includes(card) && !player2Hand.includes(card)) {
                player2Hand.push(card);
            }
        }

        return [player1Hand, player2Hand];
    }
}

let deck = new Deck();
deck.shuffle();
let [player1Hand, player2Hand] = deck.dealToPlayers();

console.log("Player 1's hand:");
console.log(player1Hand.map(card => card.toString()).join(", "));
console.log("Player 2's hand:");
console.log(player2Hand.map(card => card.toString()).join(", "));