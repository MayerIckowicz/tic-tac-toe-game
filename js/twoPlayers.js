import checkWin from "./checkWin.js";
import { translate } from "./language.js";

const winnerAndTurnH1 = document.querySelector(".winner__h1");
const pieces = document.querySelectorAll(".piece");

export let player = 0;

let numberOfPlays = 0;

const addSymbol = function (event) {
  if (
    player === 0 &&
    !event.classList.contains("o") &&
    !event.classList.contains("x")
  ) {
    event.classList.add("x");
    ++numberOfPlays;
    player = 1;
    winnerAndTurnH1.textContent = translate("yTurn");
    const isWinnerX = checkWin("x");
    if (isWinnerX) {
      winnerAndTurnH1.textContent = translate("xWins");
    }
    if (!isWinnerX && numberOfPlays === 9) {
      winnerAndTurnH1.textContent = translate("itsTie");
    }
  } else if (
    player === 1 &&
    !event.classList.contains("x") &&
    !event.classList.contains("o")
  ) {
    event.classList.add("o");
    ++numberOfPlays;
    player = 0;
    winnerAndTurnH1.textContent = translate("xTurn");
    const isWinnerO = checkWin("o");
    if (isWinnerO) {
      winnerAndTurnH1.textContent = translate("yWins");
    }
    if (!isWinnerO && numberOfPlays === 9) {
      winnerAndTurnH1.textContent = translate("itsTie");
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
  winnerAndTurnH1.textContent = translate("xTurn");
};

console.log(translate("xTurn"));
