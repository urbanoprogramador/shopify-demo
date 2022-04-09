import { asyncProduct, typeProduct } from "../reducers/reducer";
import { asyncMac, mac } from "../../utils/configReducer";

const [
  actionProductPending,
  actionProductError,
  actionProductSuccess
] = asyncMac(asyncProduct);

export const actionLoadProduct = mac(typeProduct.loadProduct, 'payload');


export const asyncActionLoadProduct = (url) => (dispatch) => {
  console.log(url);
  dispatch(actionProductPending());
  fetch(url /* {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  } */).then(res => res.json())
    .then((d) => {
      console.log(d);
      dispatch(actionLoadProduct(d));
      dispatch(actionProductSuccess());
    }).catch((error) => {
      console.log({error});
      dispatch(actionProductError('no se pudo conectar'));
    }).finally(() => {
      
    });

}
