import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'easy',
      rounds: 10,
      mode: false,
    };
  }

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  selectMode = (mode) => {
    this.setState({
      mode,
    });
  }

  startGame = () => {
    const { getQuizz, history } = this.props;
    const { rounds, difficulty, mode } = this.state;

    getQuizz(rounds, difficulty);
    mode ? history.push('/random') : history.push('/all');
  }

  render() {
    const { difficulty, rounds, mode } = this.state;

    return (
      <div>
        <h1>Options</h1>
        <h2>Difficulty</h2>
        <select name="difficulty" onChange={this.onChangeValue} value={difficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="3">Hard</option>
        </select>
        <h2>Number of rounds</h2>
        <select name="rounds" onChange={this.onChangeValue} value={rounds}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <div>
          <h2>Game mode</h2>
          <div onClick={() => this.selectMode(false)} style={{ border: mode ? 'none' : '1px solid black' }}>
            <h3>Play against all chat</h3>
            <p>Everybody on chat plays and answer. The answer with the highest percentage of vote is selected. The streamer cannot see what the chat has answered until he/she selects his own answers.</p>
          </div>
          <div onClick={() => this.selectMode(true)} style={{ border: !mode ? 'none' : '1px solid black' }}>
            <h3>Select randomly a player in chat</h3>
            <p>Every question, a viewer from chat is randomly selected. He/she plays in a 1v1 against the streamer.</p>
          </div>
        </div>
        <button onClick={this.startGame}>Start !</button>
      </div>
    );
  }
}

export default Game;
