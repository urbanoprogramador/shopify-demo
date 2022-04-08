import {applyMiddleware, compose} from "redux";

export const asyncMiddleware = store=>next=>action=>{
  if(typeof action ==='function'){
    return action(store.dispatch,store.getState);
  }
  return next(action);
}

export const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const middlewareReduxInpect= composeEnhancers( applyMiddleware( asyncMiddleware));
