import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

class ChatAnswerAll extends Component {
  render() {
    const { currentQuestion } = this.props;

    return (
      <div
        style={{
          width: '100%',
          border: '1px solid black',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <h4>Chat's answers</h4>
        <ProgressBar percent={25} text={currentQuestion.correct_answer} />
        {currentQuestion.incorrect_answers.map(answer => (
          <ProgressBar percent={25} text={answer} />
        ))}
      </div>
    );
  }
}

export default ChatAnswerAll;
