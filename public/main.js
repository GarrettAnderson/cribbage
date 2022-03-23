
// fetch request to pull in the data for the card Deck

let deckOfCards
let deckOfCardsURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

let drawCard = 'https://deckofcardsapi.com/api/deck/<<DECKID>>/draw/?count=2'
// fetch(deckOfCardsURL)
//   .then(res => res.json())
//   .then(cards =>
//
//     console.log('here is the json', deckOfCards)
//   ).catch(err => throw err);


fetch(deckOfCardsURL)
    .then(response => response.json())
    .then(data => deckOfCards = data)
    .then(() => console.log(deckOfCards))


 function dealPlayerOneCards () {



     }
dealPlayerOneCards()

// console.log(playerOneDeck)
