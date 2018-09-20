  import * as BusinessApiUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_SELECTED_BUSINESSES = 'RECEIVE_SELECTED_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEW = 'RECEIVE_ALL_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveAllBusinesses = (payload) => ({
  type: RECEIVE_ALL_BUSINESSES,
  payload,
});

export const receiveSelectedBusinesses = (businesses, searchtxt) => {
  return {
    type: RECEIVE_SELECTED_BUSINESSES,
    businesses,
    businessKeys: Object.keys(businesses),
    searchtxt,
  }
}

export const getSelectedBusinesses = (data, searchtxt) => {
  return (dispatch) => {
    BusinessApiUtil.fetchAllBusinesses(data).then((businesses) => {
      dispatch(receiveSelectedBusinesses(businesses, searchtxt));
    });
  };
};


export const receiveBusiness = (payload) => ({
  type: RECEIVE_BUSINESS,
  payload,
});

export const requestAllBusinesses = (filter) => {
  return (dispatch) => {
    BusinessApiUtil.fetchAllBusinesses(filter).then((payload) => {
      dispatch(receiveAllBusinesses(payload));
    });
  };
};

export const requestBusiness = (id) => {
  return (dispatch) => {
    BusinessApiUtil.fetchBusiness(id).then((business) => {
      dispatch(receiveBusiness(business));
    });
  };
};


export const receiveReview = ({ review, average_rating, user }) => {
  return {
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  user,
}};

export const receivewAllReviews = (reviews) => {
  return {
  type: RECEIVE_ALL_REVIEW,
  reviews
  }
}

export const requestAllReviews = () => dispatch => {
  return BusinessApiUtil.fetchAllReviews().then(reviews => (
    dispatch(receivewAllReviews(reviews))
  ))
}


export const removeReview = ({review}) => {

  return {
  type: REMOVE_REVIEW,
  deletereview: review
}};


export const createReview = review => dispatch => {
  return BusinessApiUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
};


export const updateReview = review => dispatch => {

  return BusinessApiUtil.updateReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
};

export const deleteReview = id => dispatch => {

  return BusinessApiUtil.deleteReview(id).then(review => (
    dispatch(removeReview(review))
  ))
};
