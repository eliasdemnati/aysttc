import { connect } from 'react-redux';
import { getOAuthTokenAction } from '../../redux/actions/IdentityActions';
import OAuthToken from './OAuthToken';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  saveToken: (token) => (
    dispatch(getOAuthTokenAction(token))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(OAuthToken);
