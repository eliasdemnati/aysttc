import React, { Component } from 'react';

class Header extends Component {
  isLoggedHeader = () => {
    const { identity } = this.props;

    return (
      <div>Welcome {identity.display_name}</div>
    );
  }

  isNotLoggedHeader = () => {
    return (
      <div>
        Please connect <button onClick={this.connectWithTwitch}>Connect with Twitch</button>
      </div>
    );
  }

  connectWithTwitch = () => {
    document.location = 'https://id.twitch.tv/oauth2/authorize?client_id=bjm191036lt9x95wmxjz4bz9oglmjk&redirect_uri=http://localhost:3000/oauth&response_type=token';
  }

  render() {
    const { isLogged } = this.props;

    return (
      <div>
        {isLogged ? this.isLoggedHeader() : this.isNotLoggedHeader()}
      </div>
    );
  }
}

export default Header;
