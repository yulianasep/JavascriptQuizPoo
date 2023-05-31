class Question {
  /**
   *@param {string} text this is the text  of the question
   *@param {string[]} choices there are the choices of the question
   *@param {string} answer this is the correct answer
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *@param {string} choice this is the choice of the user
   *@returns {boolean} returns true if the choice is correct, false otherwise
   */

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

export { Question };
