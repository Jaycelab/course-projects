let firstCard = 2;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: " + cards[0] + "-" + cards[1];
  if (sum <= 20) {
    message = "Do you want to hit?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackJack = true;
  } else {
    message = "Bust!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  alert("Drawing a new card from the deck!");
  let card = 4;
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
