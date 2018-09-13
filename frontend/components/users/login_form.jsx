import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.update = this.update.bind(this);

  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.login(this.state);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.login({username:"asdasd", password:"asdasd"})
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
        <div className="header"><Link to="/">Foodie</Link></div>
        <div className="error">{this.renderErrors()}</div>
        <div className="form-img">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h3>Log In to Foodie</h3>
          <p>New to Foodie?<Link to='/signup'>Sign Up</Link></p>
          <input placeholder="Email" className="signin-input-1" type="text" value={this.state.username} onChange={this.update('username')}></input>
          <input placeholder="Password" className="signin-input-1" type="text" value={this.state.password} onChange={this.update('password')}></input>
          <input type="submit" value="Login"/>
          <button onClick={this.handleDemo}>Demo</button>
        </form>
        <div>
          <img src="https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
      </div>
    </div>
  );
  }
}

export default withRouter(LoginForm);
