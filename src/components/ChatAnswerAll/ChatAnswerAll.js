import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

const ChatAnswerAll = ({ currentQuestion, hasAnswered }) => (
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
    <ProgressBar
      percent={25}
      text={currentQuestion.correct_answer}
      hasAnswered={hasAnswered}
    />
    {currentQuestion.incorrect_answers.map(answer => (
      <ProgressBar
        percent={25}
        text={answer}
        hasAnswered={hasAnswered}
      />
    ))}
  </div>
);

export default ChatAnswerAll;
