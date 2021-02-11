// @flow
import { combineReducers } from "redux";
import productsReducer from "./products-reducer";

// Root Reducer
const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
