import { gameTwoPlayers } from "./twoPlayers.js";
import gameone from "./vsMachine.js";
import {
  changeToPortuguese,
  changeToEnglish,
  changeToCzech,
} from "./language.js";

const piecesRestart = document.querySelector(".game__board");
const twoPlayers = document.querySelector(".two-player");
const onePlayer = document.querySelector(".one-player");
const restartBtn = document.querySelector(".restart__btn");

export let isGameOn = false;

// just to correct a small bug in the translations
export let isAgainstComputer = false;

const hideStartBtnShowRestartBtn = () => {
  twoPlayers.classList.add("hidden");
  onePlayer.classList.add("hidden");
  restartBtn.classList.remove("hidden");
};

twoPlayers.addEventListener("click", () => {
  hideStartBtnShowRestartBtn();
  isGameOn = true;
  gameTwoPlayers();
});

onePlayer.addEventListener("click", () => {
  hideStartBtnShowRestartBtn();
  isGameOn = true;
  isAgainstComputer = true;
  gameone();
});

const piecesList = [...piecesRestart.childNodes];
console.log(piecesList);

restartBtn.addEventListener("click", () => {
  location.reload();
});

if (!isGameOn) {
  changeToPortuguese(), changeToEnglish(), changeToCzech();
}
