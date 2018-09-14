import * as BusinessApiUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

export const receiveAllBusinesses = (businesses) => ({
  type: RECEIVE_ALL_BUSINESSES,
  businesses
})

export const receiveBusiness = (business) => ({
  type: RECEIVE_BUSINESS,
  business
})

export const requestAllBusinesses = () => {
  return (dispatch) => {
    BusinessApiUtil.fetchAllBusinesses().then((businesses) => {
      dispatch(receiveAllBusinesses(businesses))
    })
  };
};

export const requestBusiness = (id) => {
  return (dispatch) => {
    BusinessApiUtil.fetchBusiness(id).then((business) => {
      dispatch(receiveBusiness(business))
    })
  };
};
