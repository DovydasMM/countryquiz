import { AJAX, randomNumberArray } from "./helpers";
import { API_URL } from "./config";

export const state = {
  score: 0,
  question: {},
};
export const getCountryList = async function () {
  try {
    const data = await AJAX(API_URL);
    state.countryList = data;
  } catch (err) {
    throw err;
  }
};
const getRandomCountries = function () {
  const randomCountryList = [];
  randomNumberArray(4, state.countryList.length).forEach((int, index) =>
    randomCountryList.push({ country: state.countryList[int], id: index })
  );
  state.question.randomCountryList = randomCountryList;
  //Generate correct country
  const randInt = Math.floor(Math.random() * 4);
  state.question.correctCountry = state.question.randomCountryList[randInt];
};

export const resetScore = function () {
  state.score = 0;
};

export const generateQuestion = function () {
  getRandomCountries();
  const randInt = Math.floor(Math.random() * 2);
  const answers = [];
  state.question.randomCountryList.forEach((country) =>
    answers.push({ name: country.country.name, id: country.id })
  );
  state.question.answers = answers;
  //Generate CAPITAL QUESTION
  if (randInt == 0) {
    state.question.currentQuestion = `${state.question.correctCountry.country.capital} is the capital of:`;
    state.question.type = "capital";
  }
  //GENERATE FLAG QUESTION
  else {
    state.question.currentQuestion = `Which country does this flag belong to?`;
    state.question.type = "flag";
  }
};
