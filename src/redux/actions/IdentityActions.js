export const GET_OAUTH_TOKEN = 'GET_OAUTH_TOKEN';

export const getOAuthTokenAction = (data) => ({
  type: GET_OAUTH_TOKEN,
  data,
});
