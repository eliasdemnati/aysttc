import React, { Component } from 'react';
import { XmlEntities } from 'html-entities';
import { StreamerAnswer, ChatAnswerAll } from '../../components';

class GameRoomAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      currentTime: 15,
      gameStarted: false,
      streamerPoints: 0,
      chatPoints: 0,
      streamerAnswer: '',
    };
  }

  startGame = () => {
    this.setState({
      gameStarted: true,
    });

    this.setGameInterval();
  }

  setGameInterval = () => {
    const { questions, history } = this.props;
    const { currentQuestion } = this.state;

    const interval = setInterval(() => {
      const { currentTime } = this.state;

      if (currentTime === 0) {
        clearInterval(interval);
        this.checkResponse();
        return;
      }

      this.setState((prevState) => ({
        currentTime: prevState.currentTime - 1,
      }));
    }, 1000);

    if (currentQuestion + 1 >= questions.length) {
      history.goBack();
    }
  }

  checkResponse = () => {
    const { questions } = this.props;
    const { streamerAnswer, currentQuestion } = this.state;

    if (streamerAnswer === questions[currentQuestion].correct_answer) {
      this.setState((prevState) => ({
        streamerPoints: prevState.streamerPoints + 1,
      }));
    }

    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
      currentTime: 15,
      streamerAnswer: '',
    }));

    this.setGameInterval();
  }

  onClickStreamerAnswer = (answer) => {
    this.setState({
      streamerAnswer: answer,
    });
  }

  render() {
    const { gameStarted, currentQuestion, streamerPoints, chatPoints, currentTime, streamerAnswer } = this.state;
    const { questions, identity } = this.props;
    const entities = new XmlEntities();

    return (
      <div>
        <div style={{ display: gameStarted ? 'none' : 'block' }}>
          The game is about to start. Click on the Start button whenever you're ready.<br />
          <button onClick={this.startGame}>Start</button>
        </div>
        <div style={{ display: !gameStarted ? 'none' : 'block' }}>
          <h1>Question {currentQuestion + 1} / {questions.length}</h1>
          <h2>{entities.decode(questions[currentQuestion].question)}</h2>
          <h3>Category: {questions[currentQuestion].category} — {currentTime} seconds</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <StreamerAnswer
              currentQuestion={questions[currentQuestion]}
              currentAnswer={streamerAnswer}
              onClickAnswer={this.onClickStreamerAnswer}
            />
            <ChatAnswerAll
              currentQuestion={questions[currentQuestion]}
            />
          </div>
          <h3 style={{ textAlign: 'center' }}>Points</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <h3>{identity.display_name}: {streamerPoints}</h3>
            <h3>{identity.display_name}'s chat: {chatPoints}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default GameRoomAll;
