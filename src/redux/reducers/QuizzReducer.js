import {
  GET_QUESTIONS_SUCCESS,
} from '../actions/IdentityActions';

const initialState = {
  questions: [],
};

const QuizzReducer = (state = initialState, action) => {
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

export default QuizzReducer;
