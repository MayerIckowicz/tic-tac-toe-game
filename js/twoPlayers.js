import checkWin from "./checkWin.js";
import { isPortugueseOn } from "./language.js";

const winnerAndTurnH1 = document.querySelector(".winner__h1");

export let player = 0;

let numberOfPlays = 0;

const addSymbol = function (event) {
  if (player === 0 && !event.classList.contains("o")) {
    event.classList.add("x");
    ++numberOfPlays;
    player = 1;
    isPortugueseOn
      ? (winnerAndTurnH1.innerHTML = "Vez Do: O")
      : (winnerAndTurnH1.innerHTML = "O turn");
    const isWinnerX = checkWin("x");
    if (!isWinnerX && numberOfPlays === 9) {
      winnerAndTurnH1.textContent = "It is a Tie";
    }
  } else if (player === 1 && !event.classList.contains("x")) {
    event.classList.add("o");
    ++numberOfPlays;
    player = 0;
    isPortugueseOn
      ? (winnerAndTurnH1.innerHTML = "Vez Do: X")
      : (winnerAndTurnH1.innerHTML = "X turn");
    const isWinnerO = checkWin("o");
    if (!isWinnerO && numberOfPlays === 9) {
      winnerAndTurnH1.textContent = "It is a Tie";
    }
  }
};

export const gameTwoPlayers = function () {
  const pieces = document.querySelectorAll(".piece");
  pieces.forEach((e) =>
    e.addEventListener("click", function () {
      addSymbol(e);
    })
  );
  isPortugueseOn
    ? (winnerAndTurnH1.innerHTML = "Vez Do: X")
    : (winnerAndTurnH1.innerHTML = "X turn");
};
