import {
  GET_OAUTH_TOKEN,
  GET_TWITCH_USER_SUCCESS,
} from '../actions/IdentityActions';

const initialState = {
  isLogged: false,
  oauthToken: '',
  identity: {},
};

const IdentityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OAUTH_TOKEN:
      return {
        oauthToken: action.data,
      };
    case GET_TWITCH_USER_SUCCESS:
      return {
        identity: action.data,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default IdentityReducer;
