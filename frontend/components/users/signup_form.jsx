import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      zipcode: '',
      month: '',
      date: '',
      year: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  renderErrors() {
    debugger
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
    debugger
  return (
  <div>
    <div className="header">Foodie</div>
    <div className="form-img">
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <br/>
        <div className="login-form">
          <br/>
          <h3>Sign Up for Foodie</h3>
            <p> Connect with great local businesses</p>
            {this.renderErrors()}
          <div className="signin-input-1-2">
            <input type="text"
              value={this.state.firstname}
              onChange={this.update('firstname')}
              placeholder ="First Name"
            />

            <input type="text"
              value={this.state.lastname}
              onChange={this.update('lastname')}
              placeholder ="Last Name"
            />
          </div>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="signin-input-1"
              placeholder ="Email"
            />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input-1"
                placeholder ="password"
              />
            <br/>
              <input type="number"
                value={this.state.zipcode}
                onChange={this.update('zipcode')}
                className="signin-input-1"
                placeholder ="ZIP code"
              />
            <br/>
              <div className="birthday">
                <p>Birthday <span>optional</span></p>
                <div className="input-1-3">
                <select name="month" onChange={this.update('month')} value={this.state.month}>
                <option value="">Month</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>

                <select name="day" onChange={this.update('date')} value={this.state.date}>
                  <option value="">Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>

                <select name="year" onChange={this.update('year')} value={this.state.year}>
                  <option value="">Year</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                </select>
                </div>
              </div>
          <input className="session-submit" type="submit" value="Sign Up" />
        </div>
      </form>
      <div>
        <img src="https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
  </div>
</div>
  );
}
}

export default withRouter(SignupForm);
