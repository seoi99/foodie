import * as BusinessApiUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

export const receiveAllBusinesses = (payload) => ({
  type: RECEIVE_ALL_BUSINESSES,
  payload,
});

export const receiveBusiness = (payload) => ({
  type: RECEIVE_BUSINESS,
  payload,
});

export const requestAllBusinesses = () => {
  return (dispatch) => {
    BusinessApiUtil.fetchAllBusinesses().then((payload) => {
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
