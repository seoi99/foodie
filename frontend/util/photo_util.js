export const fetchPicture = (id) => {
  return $.ajax({
    method: "GET",
    url:`/api/user_pictures/${id}`
  })
}


export const deletePicture = (id) => {
  $.ajax({
    method:"DELETE",
    url: `/api/user_pictures/${id}`
  })
}

export const uploadPicture = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user_pictures',
    data: formData,
    contentType: false,
    processData: false
  });
};
