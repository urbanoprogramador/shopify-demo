export const reduceReducers = (...reducers)=>(state,action)=>
  reducers.reduce((acc,el)=>el(acc,action),state);


const initialFetching={loading:'idle',error:null};

export const makeFetchingReducer=actions=>(state=initialFetching,action)=>{
  switch(action.type){
    case actions[0]:{
      return {
	      ...state,loading:'pending',error:null
      }
    }
    case actions[1] :{
      return {...state,loading:'rejected',error:action.payload}

    }
    case actions[2] :{

      return {...state,loading:'succeded',error:null}
    }
    default :
      return state;
  }
}

export const makeRemoveReducer = staticAction =>(state={},action)=>{
  switch(action.type){
    case staticAction:{
      return {}
    }
    default:{
      return state
    }
  } 
}

export const makeSetReducer=({actions,initialState={}})=>(state=initialState,action)=>{
  switch(action.type) {
    case actions:{
      return action.payload;
    }
    default:
      return state
  }
}
export const makeCrudReducer=actions=>(state = [], action) => {
  switch(action.type) {
    case actions[0]:{
      return action.payload;
    } 
    case actions[1]:{
      const newTodos = state.map((todo:any) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload }
        }
        return todo
      })
      return newTodos; 
    }
    case actions[2]:{
      const newEntities = state.filter((entities:any)=>{
        return entities.id !== action.payload
      });
      return newEntities;
    }
    case actions[3]:{
      return state.concat({...action.payload });
    }
    default:{
      return state;
    }
  }
}


export const mac = (type,...argNames)=> (...args)=>{
  const action = {type};
  argNames.forEach((...[,index])=>{
      action[argNames[index]]=args[index];
  });
  return action;
}

export const mat = entity =>([
  `${entity} pending`,
  `${entity} rejected`,
  `${entity} success`
]);

export const asyncMac= asyncTypes=>([
  mac(asyncTypes[0]),
  mac(asyncTypes[1],'payload'),
  mac(asyncTypes[2],'payload')
]);