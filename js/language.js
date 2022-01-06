import { isGameOn, isAgainstComputer } from "./index.js";
import { player } from "./twoPlayers.js";

const engBtn = document.querySelector(".btn__eng");
const ptBtn = document.querySelector(".btn__pt");
const czBtn = document.querySelector(".btn__cz");
const gameTitleH1 = document.querySelector(".header__h1");
const twoPBtnMarkup = document.querySelector(".two-player");
const vsMachinePBtnMarkup = document.querySelector(".one-player");
const waitingH1 = document.querySelector(".winner__h1");
const restartBtnMarkup = document.querySelector(".restart__btn");

let gameLang = "en";

const translations = {
  en: {
    gameTitle: "Tic-Tac-Toe Game",
    restartButton: "Restart Game",
    xTurn: "X Turn",
    yTurn: "Y Turn",
    xWins: "X wins",
    yWins: "Y wins",
    itsTie: "It Is a Tie",
    twoPBtnMarkup: "Two Players",
    vsMachinePBtnMarkup: "One Player vs Machine",
    waitingH1: "Waiting For You To Choose Game Mode",
    humanTurn: "Your Turn To Play",
    machineTurn: "Computer is Playing",
    youWin: "You Won!",
    computerWin: "Computer Wins",
  },
  pt: {
    gameTitle: "Jogo Da Velha",
    restartButton: "Reiniciar Jogo",
    xTurn: "Vez do: X",
    yTurn: "Vez Do: O",
    xWins: "X venceu",
    yWins: "O venceu",
    itsTie: "Empate",
    twoPBtnMarkup: "Dois Jogadores",
    vsMachinePBtnMarkup: "Um Jogador vs Computador",
    waitingH1: "Esperando Você Escolher Um Modo De Jogo",
    humanTurn: "Sua Vez de Jogar",
    machineTurn: "Vez do Computador Escolher",
    youWin: "Voce Venceu!",
    computerWin: "Computador Venceu",
  },
  cz: {
    gameTitle: "Tic-Tac-Toe Game",
    restartButton: "Restartovat Hru",
    xTurn: "X otočení",
    yTurn: "O otočení",
    xWins: "X vyhrává",
    yWins: "O vyhrává",
    itsTie: "hra na kravatu",
    twoPBtnMarkup: "Dva Hráči",
    vsMachinePBtnMarkup: "Hráč Proti Počítači",
    waitingH1: "čeká, až si vyberete herní režim",
    humanTurn: "Hrajete na řadě",
    machineTurn: "Počítač hraje",
    youWin: "Vyhrál jsi",
    computerWin: "Počítač vítězí",
  },
};

export const translate = (messageId) => translations[gameLang][messageId];

const setLang = (lang) => {
  gameLang = lang;
};

export const addStartMarkup = () => {
  gameTitleH1.innerHTML = translate("gameTitle");
  restartBtnMarkup.innerHTML = translate("restartButton");
  isAgainstComputer
    ? (waitingH1.textContent = translate("humanTurn"))
    : (waitingH1.textContent = translate(player === 0 ? "xTurn" : "yTurn"));
  if (!isGameOn) {
    twoPBtnMarkup.innerHTML = translate("twoPBtnMarkup");
    vsMachinePBtnMarkup.innerHTML = translate("vsMachinePBtnMarkup");
    waitingH1.innerHTML = translate("waitingH1");
  }
};

const handleGameStart = (lang) => () => {
  setLang(lang);
  addStartMarkup();
};

export const changeToPortuguese = () =>
  ptBtn.addEventListener("click", handleGameStart("pt"));

export const changeToEnglish = () =>
  engBtn.addEventListener("click", handleGameStart("en"));

export const changeToCzech = () => {
  czBtn.addEventListener("click", handleGameStart("cz"));
};
