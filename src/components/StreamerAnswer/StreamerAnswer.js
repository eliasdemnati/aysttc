import React from 'react';

const StreamerAnswer = ({ currentQuestion, onClickAnswer, currentAnswer }) => (
  <div
    style={{
      border: '1px solid black',
      flex: 1,
    }}
  >
    <ol type="1">
      <li
        onClick={() => onClickAnswer(currentQuestion.correct_answer)}
        style={{
          color: currentQuestion.correct_answer === currentAnswer ? 'green' : 'black'
        }}
      >
        {currentQuestion.correct_answer}
      </li>
      {currentQuestion.incorrect_answers.map(answer => (
        <li
          onClick={() => onClickAnswer(answer)}
          style={{
            color: answer === currentAnswer ? 'green' : 'black'
          }}
        >
          {answer}
        </li>
      ))}
    </ol>
  </div>
);

export default StreamerAnswer;
