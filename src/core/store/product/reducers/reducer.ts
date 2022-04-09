import {combineReducers} from "redux";
import {
  makeFetchingReducer,
  makeSetReducer,
  mat
} from "../../utils/configReducer";

const product='[product]';

export const typeProduct={
  loadProduct:`${product} load`
}



const productItemReducer=makeSetReducer({actions:typeProduct.loadProduct,initialState:{}});

export const asyncProduct = mat(product);
const fetchingAdminReducer=makeFetchingReducer(asyncProduct);

export const productReducer=combineReducers({
  product:productItemReducer,
  status:fetchingAdminReducer
});