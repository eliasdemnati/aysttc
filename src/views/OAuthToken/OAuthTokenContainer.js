import { connect } from 'react-redux';
import { getOAuthTokenAction, getTwitchUserAction } from '../../redux/actions/IdentityActions';
import OAuthToken from './OAuthToken';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  saveToken: (token) => (
    dispatch(getOAuthTokenAction(token))
  ),
  getTwitchUser: (token) => (
    dispatch(getTwitchUserAction(token))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(OAuthToken);
