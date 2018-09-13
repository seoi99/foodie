import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './login_form';

const mapStateToProps = (state, ownProps) => {

  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  return {
    login: (user) => {
      return dispatch(login(
        {
          username: user.username,
          password: user.password
        }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
