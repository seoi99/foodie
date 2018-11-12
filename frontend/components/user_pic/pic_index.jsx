import React from 'react';

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    this.deletePic = this.deletePic.bind(this)
  }

  deletePic(id) {
     $.ajax({
      method:"DELETE",
      url: `/api/user_pictures/${id}`
    }).then(
      response =>  console.log("success"),
      response => console.log("failed")
    )
  }


  render (){

  return (
    <ul>
      {this.props.posts.map(post => {
         return (
          <li key={post.id}>
            <img src={post.photoUrl}/>
            <button onClick={() => this.deletePic(post.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  );
  }
}
