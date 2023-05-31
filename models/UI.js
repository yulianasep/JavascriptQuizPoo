export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("questions");
    questionTitle.innerHTML = text;
  }

  /**
   *@param {sting[]} choices
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerHTML = choice;
      button.className = "button";
      button.addEventListener("click", () => callback(choice));

      choicesContainer.append(button);
    });
  }

  /**
   *@param {number} score
   */

  showScores(score) {
    const quizEndHTML = `
      <h1>Result</h1>
      <h2 class="score" id="score">Your scores: ${score}</h2>
      `;
    // <h2 id="score">Your scores: ${quiz.score}</h2>

    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
  }

  /**
   *@param {number} currentIndex
   *@param {number} total
   */

  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
