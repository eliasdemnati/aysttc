import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
  identity: state.identity.identity,
  isLogged: state.identity.isLogged,
});

export default connect(mapStateToProps)(Header);
