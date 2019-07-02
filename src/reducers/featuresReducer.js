import { FETCH_SERVICES, FETCH_SHOP, FETCH_AUCTION } from '../actions/types';

const INITIAL_STATE = {
  pickedFeature: FETCH_SERVICES,
  featureItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHOP:
      return {
        ...state,
        pickedFeature: action.type,
        featureItems: action.payload
      };

    case FETCH_AUCTION:
      return {
        ...state,
        pickedFeature: action.type,
        featureItems: action.payload
      };
    default:
      return state;
  }
};
