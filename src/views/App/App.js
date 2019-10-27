import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default App;
