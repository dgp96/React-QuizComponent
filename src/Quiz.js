import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  handleResetClick(){
    this.setState({ quiz_position:  1 });
  }

  showNextQuestion(){
      this.setState({ quiz_position: this.state.quiz_position + 1 });
  }
  render() {
    const isQuizEnd = this.state.quiz_position-1 === quizData.quiz_questions.length ? true : false;
    //const isQuizEnd = false;
    return (
      <div>
        {
        isQuizEnd
        ?<QuizEnd resetClickHandler = {this.handleResetClick.bind(this)}/>
        :<QuizQuestion
        quiz_questions = {quizData.quiz_questions[this.state.quiz_position-1]}
        showNextQuestionHandler = {this.showNextQuestion.bind(this)}
        />
        }
      </div>
    );
  }
}

export default Quiz;