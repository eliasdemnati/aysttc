import React, { Component } from 'react';
import Axios from 'axios';
import parseMsg from '../../utils/parseMsg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      emotes: [],
    };
  }

  componentDidMount() {
    const webS = new WebSocket('wss://irc-ws.chat.twitch.tv:443', 'irc');
    
    webS.onopen = () => {
      console.log('Connecting and authenticating');
      webS.send('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
      webS.send('PASS oauth:yj9j32sxuryo5vlga5d82e4ao9rid8');
      webS.send('NICK themadmaara');
      webS.send('JOIN #riotgames');
    };

    webS.onmessage = (message) => {
      const { messages } = this.state;

      if (!message.data.includes('PRIVMSG')) {
        return;
      }

      if (messages.length > 15) {
        messages.shift();
      }

      this.setState({
        messages: [...messages, parseMsg(message.data, 'riotgames')],
      });
    };

    setInterval(() => { window.scrollBy(0, 1000); }, 50);
  }

  connectWithTwitch = () => {
    document.location = 'https://id.twitch.tv/oauth2/authorize?client_id=bjm191036lt9x95wmxjz4bz9oglmjk&redirect_uri=http://localhost:3000/oauth&response_type=token'
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <h1>Are you smarter than Twitch chat ?</h1>
        <p>"Are you smarter than Twitch chat ?" is a game where you compete against your own Twitch chat to answer questions on various theme, and various difficulties.</p>
        <div>
          {messages.map(msg => (
            <p><span style={{ color: msg.color }}>{msg['display-name']}</span>: {msg.message}</p>
          ))}
        </div>
        <button onClick={this.connectWithTwitch}>Connect with Twitch</button>
      </div>
    );
  }
}

export default App;
