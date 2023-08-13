let firstCard = getRandomCard();
let secondCard = getRandomCard();
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

function getRandomCard() {
  return 5;
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
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
  let card = getRandomCard();
  alert("Drawing a new card from the deck!");
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
