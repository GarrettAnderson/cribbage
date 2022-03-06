
// fetch request to pull in the data for the card Deck

let deckOfCards
let deckOfCardsURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

// fetch(deckOfCardsURL)
//   .then(res => res.json())
//   .then(cards =>
//
//     console.log('here is the json', deckOfCards)
//   ).catch(err => throw err);

  fetch(deckOfCardsURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      deckOfCards = data
    })



console.log(deckOfCards)
