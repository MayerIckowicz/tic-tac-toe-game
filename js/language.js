import { isGameOn } from "./index.js";
import { player } from "./twoPlayers.js";

const engBtn = document.querySelector(".btn__eng");
const ptBtn = document.querySelector(".btn__pt");
const gameTitleH1 = document.querySelector(".header__h1");
const twoPBtnMarkup = document.querySelector(".two-player");
const vsMachinePBtnMarkup = document.querySelector(".one-player");
const waitingH1 = document.querySelector(".winner__h1");
const restartBtnMarkup = document.querySelector(".restart__btn");

export let isPortugueseOn = false;

const addPtStartMarkup = () => {
  isPortugueseOn = true;
  gameTitleH1.innerHTML = "Jogo Da Velha";
  restartBtnMarkup.innerHTML = "Reiniciar Jogo";
  player === 0
    ? (waitingH1.innerHTML = "Vez do: X")
    : (waitingH1.innerHTML = "Vez Do O");
  if (!isGameOn) {
    twoPBtnMarkup.innerHTML = "Dois Jogadores";
    vsMachinePBtnMarkup.innerHTML = "Um Jogador vs Computador";
    waitingH1.innerHTML = "Esperando Você Escolher Um Modo De Jogo";
  }
};

const addEngStartMarkup = () => {
  isPortugueseOn = false;
  gameTitleH1.innerHTML = "Tic-Tac-Toe Game";
  restartBtnMarkup.innerHTML = "Restart Game";
  player === 0
    ? (waitingH1.innerHTML = "X Turn")
    : (waitingH1.innerHTML = "O Turn");
  if (!isGameOn) {
    twoPBtnMarkup.innerHTML = "Two Players";
    vsMachinePBtnMarkup.innerHTML = "One Player vs Machine";
    waitingH1.innerHTML = "Waiting For You To Choose Game Mode";
  }
};

export const changeToPortuguese = () => {
  ptBtn.addEventListener("click", addPtStartMarkup);
};

export const changeToEnglish = () => {
  engBtn.addEventListener("click", addEngStartMarkup);
};
