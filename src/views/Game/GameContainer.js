import { connect } from 'react-redux';
import { getQuestionsAction } from '../../redux/actions/QuizzActions';
import Game from './Game';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  getQuizz: (rounds, difficulty) => (
    dispatch(getQuestionsAction(rounds, difficulty))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
