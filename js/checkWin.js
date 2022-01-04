const pieces = document.querySelectorAll(".piece");
const winnerh1 = document.querySelector(".winner__h1");

const comb1 = (c) =>
  pieces[0].classList.contains(c) &&
  pieces[1].classList.contains(c) &&
  pieces[2].classList.contains(c);

const comb2 = (c) =>
  pieces[3].classList.contains(c) &&
  pieces[4].classList.contains(c) &&
  pieces[5].classList.contains(c);

const comb3 = (c) =>
  pieces[6].classList.contains(c) &&
  pieces[7].classList.contains(c) &&
  pieces[8].classList.contains(c);

const comb4 = (c) =>
  pieces[0].classList.contains(c) &&
  pieces[3].classList.contains(c) &&
  pieces[6].classList.contains(c);

const comb5 = (c) =>
  pieces[1].classList.contains(c) &&
  pieces[4].classList.contains(c) &&
  pieces[7].classList.contains(c);

const comb6 = (c) =>
  pieces[2].classList.contains(c) &&
  pieces[5].classList.contains(c) &&
  pieces[8].classList.contains(c);

const comb7 = (c) =>
  pieces[0].classList.contains(c) &&
  pieces[4].classList.contains(c) &&
  pieces[8].classList.contains(c);

const comb8 = (c) =>
  pieces[2].classList.contains(c) &&
  pieces[4].classList.contains(c) &&
  pieces[6].classList.contains(c);

const checkWin = function (xo) {
  if (
    comb1(xo) ||
    comb2(xo) ||
    comb3(xo) ||
    comb4(xo) ||
    comb5(xo) ||
    comb6(xo) ||
    comb7(xo) ||
    comb8(xo)
  ) {
    winnerh1.innerHTML = `${xo.toUpperCase()} Wins`;
    return true;
  }
};

export default checkWin;
