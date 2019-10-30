import { connect } from 'react-redux';
import GameRoomAll from './GameRoomAll';

const mapStateToProps = (state) => ({
  questions: state.quizz.questions,
  identity: state.identity.identity,
});

export default connect(mapStateToProps)(GameRoomAll);
