import React from 'react';


export default class PicForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoFile: null,
      photoUrl: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result})
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('user_picture[photo]', this.state.photoFile);
    }
    this.props.uploadPicture(formData)
  }



  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="picture-form">
          <input type="file"
            onChange={this.handleFile.bind(this)}/>
          {preview}
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
