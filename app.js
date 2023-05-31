import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 *
 * @param {Quiz} quiz
 * @param {UI} ui
 */

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (answer) => {
      quiz.guess(answer);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, questions.length);
  }
};

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();
