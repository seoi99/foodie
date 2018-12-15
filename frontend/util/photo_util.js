export const fetchPicture = (id) => {
  return $.ajax({
    method: "GET",
    url:`/api/user_pictures/${id}`
  })
}
export const fetchAllPictures = () => {

  return $.ajax({
    method: "GET",
    url:`/api/user_pictures`
  })
}


export const deletePicture = (id) => {
  return $.ajax({
    method:"DELETE",
    url: `/api/user_pictures/${id}`
  })
}

export const uploadPicture = (formData) => {
<<<<<<< HEAD
  
=======
>>>>>>> ffc86eff251a60724b78e84e4a788c0d044846df
  return $.ajax({
    method: 'POST',
    url: '/api/user_pictures',
    data: formData,
    contentType: false,
    processData: false
  });
};
