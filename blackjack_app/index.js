let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum <= 20) {
  message = "Do you want to hit? 🙂";
} else if (sum === 21) {
  message = "Blackjack!!!🥳";
  hasBlackJack = true;
} else {
  message = "Bust!! 😭";
  isAlive = false;
}

console.log(message);
