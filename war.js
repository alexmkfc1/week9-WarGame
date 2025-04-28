// Card class represents an individual playing card with a value and suit.

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    // Method to describe the card in a readable format
    describe() {
                
        // Map of face card values to names (Jack, Queen, King, Ace)
        const faceCards = {
            11: 'Jack',
            12: 'Queen',
            13: 'King',
            14: 'Ace'
        };

         // Determine the card's value string (if it's a face card, use the name)
        const valueStr = this.value > 10 ? faceCards[this.value] : this.value;
        return `${valueStr} of ${this.suit}`;
    }
}

// Deck class represents a deck of cards
    export class Deck {
    constructor(){
        this.cards = []; //Array to hold the deck's cards
        this.createDeck(); // Create the deck when a new deck object is instantiated
    }

    
    // Method to create a standard deck of cards (52 cards)
    createDeck(){
        let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
        for (let suit of cardSuits){
            for (let value = 2; value <=14; value++){
                this.cards.push(new Card(value, suit));
            }
        }
        
    }
    // Method to shuffle the deck randomly
    shuffle(){
        for(let i = this.cards.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    // Method to deal the deck into two halves (for two players)
    deal (){
        const mid = this.cards.length / 2;
        return [this.cards.slice(0, mid), this.cards.slice(mid)];
    }
}


// Player class represents a player in the game
class Player {
    constructor (name, hand){
        this.name = name;
        this.hand = hand;
        this.score = 0;
    }

    // Method for the player to play a card (the first card in their hand)
    playCard(){
        return this.hand.shift();
    }
}

// Game class represents the main game logic
class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        
    }

    // Method to start the game: create and shuffle deck, deal cards, and initialize players
    starGame(){
        const deck = new Deck();
        deck.shuffle();
        const [hand1, hand2] = deck.deal();

        this.player1 = new Player("Player 1", hand1);
        this.player2 = new Player("Player 2", hand2);
    }

    // Method to play the game (26 rounds, each round one card from each player)
    playGame(){
        console.log("🔥 Starting the game of WAR!\n");

        // Loop for 26 rounds (since each player has 26 cards)
        for( let i = 0; i < 26; i++){
            const card1 = this.player1.playCard();
            const card2 = this.player2.playCard();

            console.log(`\nRound ${i + 1}:`);
            console.log(`${this.player1.name} plays ${card1.describe()}`);
            console.log(`${this.player2.name} plays ${card2.describe()}`);

            // Determine the winner of the round based on card value
            if (card1.value > card2.value){
                this.player1.score++;
                console.log(` ➡️ ${this.player1.name} wins this round!`);   
            }else if (card1.value < card2.value){
                this.player2.score++;
                console.log(` ➡️ ${this.player2.name} wins this round!`);
        }else {
                console.log(` 🤝 It's a tie!`);
            }
            // Display the current score after each round
            console.log(`Score => Player 1: ${this.player1.score} | Player 2: ${this.player2.score}`);
        }
        // After all rounds, declare the winner based on the final score

        this.declareWinner();
    }

    // Method to declare the winner of the game based on the scores
    declareWinner() {
        console.log("\n🏁 Final Score:");
        console.log(`Player 1: ${this.player1.score}`);
        console.log(`Player 2: ${this.player2.score}`);
    
        if (this.player1.score > this.player2.score) {
          console.log("🎉 Player 1 wins the game!");
        } else if (this.player2.score > this.player1.score) {
          console.log("🎉 Player 2 wins the game!");
        } else {
          console.log("⚖️ It's a tie game!");
        }
      }
    }


const game = new Game();
game.starGame();
game.playGame();
// The game of WAR has ended!