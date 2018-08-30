import { connect } from 'react-redux';

import App from 'src/components/App';
import { toggleLight } from 'src/store/actions';

const mapStateToProps = state => ({
  light: state.light
});

const mapDispatchToProps = dispatch => ({
  toggleLight: () => {
    dispatch(toggleLight());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
