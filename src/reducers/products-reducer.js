// @flow

import {
  GET_ALL_PRODUCTS_LIST,
  GET_PRODUCTS_BY_FILTER,
} from "../constants/action-types";

const initialState = {
  products: [],
  filterProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_LIST:
      return {
        ...state,
        products: action.payload,
        filterProducts: action.payload,
      };

    case GET_PRODUCTS_BY_FILTER:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
