import React from 'react';
import Form from './form';

export default class UserPic extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestPhoto(this.props.userId)
  }
  handleImage() {
    this.setState({photoUrl: this.props.photo.photoUrl})
  }


  render() {
    let img = this.props.photo ? <img src={this.props.photo.photoUrl}/> : <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"/>
    let button = this.props.photo ? <button className="delete-but" onClick={() => this.props.deletePhoto(this.props.photo.id)}>Delete</button> : null

    return (
      <div>
        <div className="prof-image">
          {img}
          <div className="prof-1-2">
            {this.props.openUpload}
            {button}
          </div>
        </div>
      </div>
    )
  }
}
