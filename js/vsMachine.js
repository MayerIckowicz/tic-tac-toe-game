import checkWin from "./checkWin.js";
import { isPortugueseOn } from "./language.js";

const winnerAndTurnH1 = document.querySelector(".winner__h1");

let numberOfPlays = 0;

const addSymbol = function (event, piecesArray) {
  if (!event.classList.contains("o")) {
    event.classList.add("x");
    isPortugueseOn
      ? (winnerAndTurnH1.textContent = "Vez do Computador Escolher")
      : (winnerAndTurnH1.textContent = "Computer is Playing");
    numberOfPlays++;
    const isWinnerX = checkWin("x");
    if (!isWinnerX && numberOfPlays === 9) {
      winnerAndTurnH1.textContent = "It is a Tie";
    }
    if (isWinnerX) return;
    setTimeout(() => {
      machinePlay(piecesArray);
    }, 500);
    console.log(piecesArray[1].classList.contains("x"));
  }
};

const randomMachineNumber = () => Math.trunc(Math.random() * 9);

const machinePlay = (arr) => {
  const pick = randomMachineNumber();
  console.log(pick);
  if (numberOfPlays >= 9) return;
  if (arr[pick].classList.contains("x") || arr[pick].classList.contains("o")) {
    machinePlay(arr);
    console.log("machine is trying to find something");
  } else {
    console.log(arr);
    arr[pick].classList.add("o");
    numberOfPlays++;
    isPortugueseOn
      ? (winnerAndTurnH1.textContent = "Sua Vez")
      : (winnerAndTurnH1.textContent = "Your Turn To Play");
    const isWinnerO = checkWin("o");
    if (!isWinnerO && numberOfPlays === 9) {
      winnerAndTurnH1.textContent = "It is a Tie";
    }
  }
};

const gameone = function () {
  const pieces = document.querySelectorAll(".piece");
  pieces.forEach((e) =>
    e.addEventListener("click", () => addSymbol(e, pieces))
  );
  isPortugueseOn
    ? (winnerAndTurnH1.textContent = "Sua Vez")
    : (winnerAndTurnH1.textContent = "Your Turn To Play");
};

export default gameone;
