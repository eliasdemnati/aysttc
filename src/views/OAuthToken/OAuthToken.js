import React, { Component } from 'react';

class OAuthToken extends Component {
  componentDidMount() {
    const { history } = this.props;

    const hash = document.location.hash;
    const result = hash.split('&').reduce((result, item) => {
      const parts = item.split('=');
      result[parts[0]] = parts[1];
      return result;
    }, {});

    history.push('/');
  }

  render() {
    return (
      <div>OAuthToken</div>
    );
  }
}

export default OAuthToken;
