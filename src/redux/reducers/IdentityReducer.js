import { GET_OAUTH_TOKEN } from '../actions/IdentityActions';

const initialState = {
  oauthToken: '',
};

const IdentityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OAUTH_TOKEN:
      return {
        oauthToken: action.data,
      };
    default:
      return state;
  }
};

export default IdentityReducer;
