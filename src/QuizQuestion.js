import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component{

  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
  }

   handleClick(buttonText){
      if(buttonText === this.props.quiz_questions.answer) {
        this.setState({ incorrectAnswer: false });
        this.props.showNextQuestionHandler();
      }

      else{
        this.setState({ incorrectAnswer: true });
      }
  }

  render(){
    return(
      <main>
        <section>
          <p>{this.props.quiz_questions.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
          {this.props.quiz_questions.answer_options.map((answer_option, idx) => (
            <QuizQuestionButton
            key = {idx}
            button_text = {answer_option}
            clickHandler = {this.handleClick.bind(this)}
            />
          ))}

          </ul>
        </section>
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    );
  }
}
export default QuizQuestion;
