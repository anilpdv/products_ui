import {
  GET_ALL_PRODUCTS_LIST,
  GET_PRODUCTS_BY_FILTER,
} from "../constants/action-types";
import { getAllProducts, getProductsByFilter } from "../services";

export const fetchProductsList = () => async (dispatch) => {
  try {
    const data = await getAllProducts();
    dispatch({ type: GET_ALL_PRODUCTS_LIST, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const fetchProductsByFilter = (params) => async (dispatch) => {
  try {
    const data = await getProductsByFilter(params);
    dispatch({ type: GET_PRODUCTS_BY_FILTER, payload: data });
  } catch (err) {
    console.log(err);
  }
};
