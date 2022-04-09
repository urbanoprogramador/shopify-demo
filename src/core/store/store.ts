import { middlewareReduxInpect} from './middleware/middleware';
import { combineReducers, createStore } from 'redux';
import { userReducer } from './auth/reducers/reducer';
import { productReducer } from './product/reducers/reducer';
import { themeReducer } from './theme/reducers/reducer';


const reducer=combineReducers({
  auth:userReducer,
  product:productReducer,
  theme:themeReducer
})

export const store = createStore(reducer,middlewareReduxInpect);