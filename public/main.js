
// fetch request to pull in the data for the card Deck

// let deckOfCardsURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  let deckOfCards = 'https://www.deckofcardsapi.com/api/deck/new/'

// fetch(deckOfCardsURL)
//   .then(res => res.json())
//   .then(cards =>
//
//     console.log('here is the json', deckOfCards)
//   ).catch(err => throw err);


let deckOfCards = fetch(deckOfCardsURL)
    .then(response => response.json())
    .then(data => {
      return data
    })
    // .then(() => console.log(deckOfCards))
console.log(deckOfCards)

let drawCard = 'https://deckofcardsapi.com/api/deck/<<DECKID>>/draw/?count=2'

 function dealPlayerOneCards () {



     }
dealPlayerOneCards()

// console.log(playerOneDeck)
