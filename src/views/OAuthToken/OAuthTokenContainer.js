import { connect } from 'react-redux';
import { getOAuthTokenAction } from '../../redux/actions/IdentityActions';
import OAuthToken from './OAuthToken';

const mapDispatchToProps = (dispatch) => ({
  saveToken: (token) => {
    dispatch(getOAuthTokenAction(token));
  },
});

export default connect(() => {}, mapDispatchToProps)(OAuthToken);
