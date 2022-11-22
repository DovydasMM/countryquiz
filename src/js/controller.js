import "../css/style.css";
import Background from "../images/background.png";
import * as model from "./model.js";
import questionView from "./views/questionView";
import endView from "./views/endView";

const controlCountryList = async function () {
  try {
    await model.getCountryList();
  } catch (err) {
    throw err;
  }
};

const controlGenerateQuestion = function () {
  model.generateQuestion();
  questionView.render(model.state);
};

const controlShowEnd = function () {
  endView.renderEndScreen(model.state);
  endView.addHandlerClick(controlGenerateQuestion);
  model.resetScore();
};

const controlSelectAnswer = function (userAnswer) {
  questionView.removeListeners();
  if (
    userAnswer.textContent.includes(
      model.state.question.correctCountry.country.name.common
    )
  ) {
    console.log("Answer was correct");
    model.state.score++;
    questionView.correctAnswerMarkup(userAnswer);
    questionView.nextQuestion(controlGenerateQuestion);
  } else {
    console.log(
      `Answer is wrong. The country was ${model.state.question.correctCountry.country.name.common}`
    );
    questionView.incorrectAnswerMarkup(
      userAnswer,
      model.state.question.correctCountry
    );
    endView.endGame(controlShowEnd);
  }
};

const init = function () {
  controlCountryList();
  questionView.addHandlerQuestion(controlGenerateQuestion);
  questionView.addHandlerSelectAnswer(controlSelectAnswer);
};

init();
