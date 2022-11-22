import View from "./View";

class QuestionView extends View {
  bigData = this._data;
  _parentElement = document.querySelector(".container");
  btnStartGame = document.querySelector(".btn--start");

  _generateMarkup() {
    if (this._data.question.type == "capital") {
      return `
      <div class="game-window">
    <div class="game-window__question game-window__question--gap">${this._data.question.currentQuestion}</div>
    <div class="answers">
      <div class="answers__answer" data-id="0">A. ${this._data.question.answers[0].name.common}</div>
      <div class="answers__answer" data-id="1">B. ${this._data.question.answers[1].name.common}</div>
      <div class="answers__answer" data-id="2">C. ${this._data.question.answers[2].name.common}</div>
      <div class="answers__answer" data-id="3">D. ${this._data.question.answers[3].name.common}</div>
      <button class="btn btn--next hidden">Next</button>
      </div>

      </div>

    `;
    } else {
      return `
    <div class="game-window">
    <img class ='game-window__flag'src="${this._data.question.correctCountry.country.flags.svg}">
    <div class="game-window__question">${this._data.question.currentQuestion}</div>
    <div class="answers">
      <div class="answers__answer" data-id="0">A. ${this._data.question.answers[0].name.common}</div>
      <div class="answers__answer" data-id="1">B. ${this._data.question.answers[1].name.common}</div>
      <div class="answers__answer" data-id="2">C. ${this._data.question.answers[2].name.common}</div>
      <div class="answers__answer" data-id="3">D. ${this._data.question.answers[3].name.common}</div>
      <button class="btn btn--next hidden">Next</button>
      </div>

      </div>
    `;
    }
  }

  addHandlerQuestion(handler) {
    this.btnStartGame.addEventListener("click", function () {
      handler();
    });
  }

  nextQuestion(handler) {
    let btnNext = document.querySelector(".btn--next");
    btnNext.classList.toggle("hidden");
    btnNext.addEventListener("click", handler);
  }

  addHandlerSelectAnswer(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const answer = e.target.closest(".answers__answer");
      if (!answer) return;
      handler(answer);
    });
  }

  correctAnswerMarkup(currentAnswer) {
    currentAnswer.classList.add("answers__answer--correct");
  }

  incorrectAnswerMarkup(currentAnswer, correctAnswer) {
    currentAnswer.classList.add("answers__answer--wrong");
    const correctElementDOM = document.querySelector(
      `[data-id='${correctAnswer.id}']`
    );
    correctElementDOM.classList.add("answers__answer--correct");
  }
  removeListeners() {
    const answers = document.querySelectorAll(".answers__answer");
    answers.forEach((elem) =>
      elem.addEventListener("click", function (e) {
        e.stopPropagation();
      })
    );
  }
}

export default new QuestionView();
