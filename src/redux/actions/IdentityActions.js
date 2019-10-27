import Axios from 'axios';

export const GET_OAUTH_TOKEN = 'GET_OAUTH_TOKEN';
export const GET_TWITCH_USER_SUCCESS = 'GET_TWITCH_USER_SUCCESS';

export const getOAuthTokenAction = (data) => ({
  type: GET_OAUTH_TOKEN,
  data,
});

export const getTwitchUserSuccessAction = (data) => ({
  type: GET_TWITCH_USER_SUCCESS,
  data,
});

export const getTwitchUserAction = (token) => (
  (dispatch) => {
    Axios.get('https://api.twitch.tv/helix/users', {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'uo6dggojyb8d6soh92zknwmi5ej1q2',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data.data[0]);
        dispatch(getTwitchUserSuccessAction(response.data.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
