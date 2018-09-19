import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToDetails = this.navigateToDetails.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value});
    };
  }

  navigateToDetails() {
    
    const url = `/businesses/${this.props.match.params.businessId}`
    this.props.history.push(url);
  }
  handleSubmit(e) {
    e.preventDefault();
    const businessId = parseInt(this.props.match.params.businessId);
    const review = Object.assign({}, this.state, {business_id: businessId});
    this.props.action(review);
    this.navigateToDetails();
  }

  render() {
    const review = this.props.review
    if (review !== undefined) {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Rating</label>
        <br/>
        <input
          type="number"
          value={this.state.rating}
          onChange={this.update("rating")}
        />
        <br/>
        <textarea value={this.state.body} onChange={this.update('body')} />
        <input type="submit" value="submit"/>
      </form>
      )
  }
  else {
  return (<h1></h1>)
  }
}
}

export default withRouter(ReviewForm);
