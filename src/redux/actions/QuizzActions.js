import Axios from 'axios';

export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';

export const getQuestionsSuccess = (data) => ({
  type: GET_QUESTIONS_SUCCESS,
  data,
});

export const getQuestionsAction = (rounds, difficulty) => (
  (dispatch) => {
    Axios.get(`https://opentdb.com/api.php?amount=${rounds}&difficulty=${difficulty}`)
      .then((response) => {
        dispatch(getQuestionsSuccess(response.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
