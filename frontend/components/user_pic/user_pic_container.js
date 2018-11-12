import { connect } from 'react-redux';
import { requestPhoto, deletePhoto, uploadPicture} from '../../actions/user_pic_action';
import UserPic from './user_pic';


const mapStateToProps = (state) => {
  return {
    photo: state.entities.photos[state.session.currentUserId],
    userId: state.session.currentUserId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPhoto: (id) => dispatch(requestPhoto(id)),
    uploadPicture: (formData) => dispatch(uploadPicture(formData)),
    deletePhoto: (id) => dispatch(deletePhoto(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPic);
