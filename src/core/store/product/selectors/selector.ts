



export const selectProduct = state => state.product?.product;

export const selectProductStatus = state =>{
  const { product:{status}}=state
  return status;
}
export const selectGalery= state =>state.product?.product.images;
export const selectVariants=state=>state.product?.product.variants;
export const selectDescription=state=>state.product?.product.description;
export const selectTitle=state=>state.product?.product.title;
export const selectVendor=state=>state.product?.product.vendor;
export const selectOptions=(name)=>state=>{
  return state.product?.product.options.find((e)=>e.name===name);
};

export const selectPrice=state=>{
  const {price_min,compare_at_price}=state.product?.product;

  return {
    price_min,
    compare_at_price
  }
}