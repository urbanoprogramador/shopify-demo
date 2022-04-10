import { Ioptions } from "../reducers/reducer";





export const selectProduct = state => state.product?.product;

export const selectProductStatus = state =>{
  const { product:{status}}=state
  return status;
}


export interface IProduct {
  images:String[]
  variants:any[]
  description:String
  title:String
  vendor:String,
  options:any[],
  price_min:Number,
  compare_at_price:Number
}




export const selectGalery= (state):any[] =>state.product?.product.images;
export const selectVariants=(state):any[]=>state.product?.product.variants;
export const selectDescription=(state):String=>state.product?.product.description;
export const selectTitle=(state):String=>state.product?.product.title;
export const selectVendor=(state):String=>state.product?.product.vendor;
export const selectOptions=(name:String)=>(state:any):Ioptions|null=>{

  return state.product?.product.options.find((e)=>e.name===name);

};

export const selectPrice=state=>{
  const {price_min,compare_at_price}=state.product?.product;

  return {
    price_min,
    compare_at_price
  }
}