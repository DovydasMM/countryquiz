import View from "./View";
import WinnerLogo from "../../images/undraw_winners_ao2o 2.svg";

class EndView extends View {
  bigData = this._data;
  _parentElement = document.querySelector(".container");

  _generateMarkup() {
    return `
    <img src=${WinnerLogo}>
    <div class="container__results">Results</div>
    <div class="container__final-score">You got <span class="green"> ${this._data.score}</span> correct answers</div>
    <button class="btn btn--restart">Try again!</button>
    </div>
    `;
  }

  endGame(handler) {
    let btnNext = document.querySelector(".btn--next");
    btnNext.classList.toggle("hidden");
    btnNext.addEventListener("click", handler);
  }

  addHandlerClick(handler) {
    let btnNewGame = document.querySelector(".btn--restart");
    btnNewGame.addEventListener("click", handler);
  }
}

export default new EndView();
