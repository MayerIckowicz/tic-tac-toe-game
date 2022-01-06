import checkWin from "./checkWin.js";
import { translate } from "./language.js";

const winnerAndTurnH1 = document.querySelector(".winner__h1");

let numberOfPlays = 0;

const addSymbol = function (event, piecesArray) {
  if (!event.classList.contains("o") && !event.classList.contains("x")) {
    event.classList.add("x");
    winnerAndTurnH1.textContent = translate("machineTurn");
    numberOfPlays++;
    const isWinnerX = checkWin("x");
    if (!isWinnerX && numberOfPlays === 9) {
      winnerAndTurnH1.textContent = translate("itsTie");
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
    winnerAndTurnH1.textContent = translate("humanTurn");
    const isWinnerO = checkWin("o");
    if (!isWinnerO && numberOfPlays === 9) {
      winnerAndTurnH1.textContent = translate("itsTie");
    }
  }
};

const gameone = function () {
  const pieces = document.querySelectorAll(".piece");
  pieces.forEach((e) =>
    e.addEventListener("click", () => addSymbol(e, pieces))
  );
  winnerAndTurnH1.textContent = translate("humanTurn");
};

export default gameone;
