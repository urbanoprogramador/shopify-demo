import { asyncProduct, IProduct, typeProduct } from "../reducers/reducer";
import { asyncMac, mac } from "../../utils/configReducer";

const [
  actionProductPending,
  actionProductError,
  actionProductSuccess
] = asyncMac(asyncProduct);




interface IActionProductLoad{
  payload:IProduct
};





export const actionLoadProduct = mac<IActionProductLoad>(typeProduct.loadProduct);


export const asyncActionLoadProduct = (url) => (dispatch) => {
  console.log(url);
  dispatch(actionProductPending());
  fetch(url /* {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  } */).then(res => res.json())
    .then((d:IProduct) => {
      console.log(d);
      dispatch(actionLoadProduct({
        payload:d
      }));
      dispatch(actionProductSuccess());
    }).catch((error) => {
      console.log({error});
      dispatch(actionProductError({payload:error.message}));
    }).finally(() => {
      
    });

}
