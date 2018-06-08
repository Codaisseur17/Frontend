import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Quiz } from "../lib/data.js";
import { Quiz2 } from "../lib/data.js";
import { takeQuiz } from "../actions/takequiz";
import { fetchQuiz } from "../actions/quizzes";
//test
const answer = [];

class TakeQuiz extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (!this.props.quiz) {
      this.props.fetchQuiz(id);
    }
  }

  handleInputChange(event) {
    console.log("------", this.props.quetions, "-----");
    //const ddd = this.props.quetions;
    //ddd.map(x => console.log(x, "jo"));
    this.setState(
      {
        ...this.state,
        [Number(event.target.name) + 1]: {
          id: Number(event.target.name) + 1,
          userAnswer: event.target.value
        }
        // useranswer: event.target.value,
        // id: Number(event.target.name) + 1
      }
      // function() {
      //   answer.push(this.state);
      //   console.log(this.state);
      // }.bind(this)
    );
    console.log(this.state);
  }
  handleSubmit(event) {
    this.props.takeQuiz(this.props.match.params.id, this.state);
    console.log(answer, "__");

    event.preventDefault();
  }

  render() {
    return (
      <div>
        {!this.props.quiz && <div>Loading...</div>}
        {this.props.quiz && (
          <form onSubmit={this.handleSubmit}>
            {this.props.quiz.questions.map((question, i) => (
              <div>
                {question.question} <br />
                <input
                  name={i}
                  type="radio"
                  value="A"
                  onChange={this.handleInputChange}
                />
                {
                  //{"userAnswer":"b","id":3}
                }
                {question.A} <br />
                <input
                  name={i}
                  type="radio"
                  value={"B"}
                  onChange={this.handleInputChange}
                />
                {question.B} <br />
                <input
                  name={i}
                  type="radio"
                  value={"C"}
                  onChange={this.handleInputChange}
                />
                {question.C} <br />
                <input
                  name={i}
                  type="radio"
                  value={"D"}
                  onChange={this.handleInputChange}
                />
                {question.D} <br />
                <br />
              </div>
            ))}

            <input type="submit" value="Submit" />
          </form>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ fetchquiz }) => {
  return {
    quiz: fetchquiz
  };
};

export default connect(
  mapStateToProps,
  {
    takeQuiz,
    fetchQuiz
  }
)(TakeQuiz);

//send to zusi
// {1:“a”} and now it is {userAnswer:“a”, id:“1”}
// [{"userAnswer":"B","id":1},{"userAnswer":"A","id":2},{"userAnswer":"B","id":3}]
