import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return(e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
    <div>
      <div className="header">Foodie</div>
      {this.renderErrors()}
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} onChange={this.update('username')}></input>
        <input type="text" value={this.state.password} onChange={this.update('password')}></input>
        <input type="submit" value="Login"/>
      </form>
    </div>
  );
  }
}

export default withRouter(LoginForm);
