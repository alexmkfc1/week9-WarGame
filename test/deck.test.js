import { expect } from 'chai';  
import { Deck } from '../war.js';  

describe('Deck', () => {
  it('should create a deck of 52 cards', () => {
    const deck = new Deck();
    expect(deck.cards.length).to.equal(52);
  });

  it('should shuffle the deck', () => {
    const deck = new Deck();
    const initialDeck = [...deck.cards]; 
    deck.shuffle();
    expect(deck.cards).to.not.deep.equal(initialDeck); 
  });

  it('should deal cards to two players', () => {
    const deck = new Deck();
    deck.shuffle();
    const [player1Cards, player2Cards] = deck.deal();
    expect(player1Cards.length).to.equal(26);
    expect(player2Cards.length).to.equal(26);
  });
});
