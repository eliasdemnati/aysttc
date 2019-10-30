import {
  GET_QUESTIONS_SUCCESS,
} from '../actions/QuizzActions';

const initialState = {
  questions: [],
};

const QuizzReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return {
        questions: action.data,
      };
    default:
      return state;
  }
};

export default QuizzReducer;
