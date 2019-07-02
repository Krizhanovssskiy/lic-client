// import lic from '../apis/lic';
import axios from 'axios';

import {
  SIGN_IN,
  SIGN_OUT,
  REGISTRATION,
  // FETCH_SERVICES,
  // FETCH_SHOP,
  // FETCH_AUCTION,
  // FETCH_PORTFOLIO,
  // FETCH_CV
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const registration = formValue => async dispatch => {
  const response = await axios.post('https://api.lic.bz', {
    key: 'yRQ2eGNJA45KfRO2',
    type: 'registration',
    username: 'mySubDomain',
    email: formValue
  });
  dispatch({ type: REGISTRATION, payload: response.data });
};

// export const fetchServices = () => {
//   return {
//     type: FETCH_SERVICES
//   };
// };

// export const fetchShop = () => {
//   return {
//     type: FETCH_SHOP
//   };
// };

// export const fetchAuction = () => {
//   return {
//     type: FETCH_AUCTION
//   };
// };

// export const fetchPortfolio = () => {
//   return {
//     type: FETCH_PORTFOLIO
//   };
// };

// export const fetchCv = () => {
//   return {
//     type: FETCH_CV
//   };
// };
