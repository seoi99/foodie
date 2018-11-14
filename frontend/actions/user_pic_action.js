import * as PhotoUtil from '../util/photo_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const PHOTO_ERROR = 'PHOTO_ERROR';

export const receivePhoto = (payload) => {
  return {
  type: RECEIVE_PHOTO,
  payload,
  }
};

export const receiveAllPhotos = (photos) => {
  return {
  type: RECEIVE_ALL_PHOTOS,
  photos,
  }
};

export const removePhoto = (photo) => {
  debugger
  return {
  type: REMOVE_PHOTO,
  photo: photo.message
  }
};

export const photoError = (errors) => {

  return {
  type: PHOTO_ERROR,
  errors: errors.errors
  }
};


export const requestPhoto = (id) => (dispatch) => {
  PhotoUtil.fetchPicture(id).then(
    (photo) => dispatch(receivePhoto(photo)),
    (errors) => dispatch(photoError(errors))
  )
}

export const requestAllPhotos = () => (dispatch) => {
  PhotoUtil.fetchAllPictures().then(
    (photos) => dispatch(receiveAllPhotos(photos)),
    (errors) => dispatch(photoError(errors))
  )
}

export const uploadPicture = (formData) => (dispatch) => {
  PhotoUtil.uploadPicture(formData).then(
    (photo) => dispatch(receivePhoto(photo)),
    (errors) => dispatch(photoError({errors: "no photo found"}))
  )
}

export const deletePhoto = (id) => (dispatch) => {
  PhotoUtil.deletePicture(id).then(
    (response) => dispatch(removePhoto(response)),
  )
}
