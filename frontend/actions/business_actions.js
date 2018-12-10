import * as BusinessApiUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_SELECTED_BUSINESSES = 'RECEIVE_SELECTED_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';
export const RECEIVE_ALL_REVIEW = 'RECEIVE_ALL_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERROR = 'RECEIVE_REVIEW_ERROR';
export const START_LOADING_REVIEW_INDEX = 'START_LOADING_REVIEW_INDEX';

export const receiveAllBusinesses = (payload) => {
  debugger
  return {
  type: RECEIVE_ALL_BUSINESSES,
  payload
  }
};

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERROR,
  errors
});

export const receiveSearchResult = (result) => {
  debugger
  return {
  type: RECEIVE_SEARCH_RESULT,
  result
  }
}

export const getSearchResult = (query) => {

  return (dispatch) => {
    BusinessApiUtil.fetchSearchResult(query).then((businesses) => {
      dispatch(receiveSearchResult(businesses))
    })
  }
}

export const receiveSelectedBusinesses = ({businesses}, searchtxt) => {
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

export const requestAllBusinesses = () => (dispatch) => {
    dispatch(startLoadingReviewIndex());

    return BusinessApiUtil.fetchAllBusinesses().then((payload) => {
      dispatch(receiveAllBusinesses(payload));
    });
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

export const startLoadingReviewIndex = () => {
  return {
    type: START_LOADING_REVIEW_INDEX
  }
}

// ui testing
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
  ), (error) => {
    dispatch(receiveReviewErrors(error.responseJSON))
  })
};


export const updateReview = review => dispatch => {

  return BusinessApiUtil.updateReview(review).then(review => (
    dispatch(receiveReview(review))
  ), (error) => {
    dispatch(receiveReviewErrors(error.responseJSON))
  })
};

export const deleteReview = id => dispatch => {

  return BusinessApiUtil.deleteReview(id).then(
    (review) => {
      dispatch(removeReview(review))}
  )
};
