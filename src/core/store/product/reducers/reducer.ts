import {combineReducers} from "redux";
import {
  makeFetchingReducer,
  makeSetReducer,
  mat
} from "../../utils/configReducer";

export interface Ioptions{
  values:any[]
  name:String
}


export interface IProduct {
  images:String[]
  variants:any[]
  description:String
  title:String
  vendor:String,
  options:Ioptions[],
  price_min:Number,
  compare_at_price:Number
}

const product='[product]';

export const typeProduct={
  loadProduct:`${product} load`
}



const productItemReducer=makeSetReducer<IProduct>({actions:typeProduct.loadProduct,initialState:{}});

export const asyncProduct = mat(product);
const fetchingAdminReducer=makeFetchingReducer(asyncProduct);

export const productReducer=combineReducers({
  product:productItemReducer,
  status:fetchingAdminReducer
});