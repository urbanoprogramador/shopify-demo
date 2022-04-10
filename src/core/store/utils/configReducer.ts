export const reduceReducers = <T>(...reducers:Function[])=>(state,action):T=>
  reducers.reduce((acc,el)=>el(acc,action),state);


export interface IFetchingState{
  loading:string,
  error:String|null
}



export const makeFetchingReducer=(actions:String[])=>{
  
  const initialFetching:IFetchingState={loading:'idle',error:null};
  return (state:IFetchingState=initialFetching,action:any):IFetchingState=>{
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
}}

export const makeRemoveReducer = <T>(staticAction:string) =>(state:T,action):T|null=>{
  switch(action.type){
    case staticAction:{
      return null;
    }
    default:{
      return state
    }
  } 
}




export const makeSetReducer=<T>({actions,initialState})=>(state=initialState,action):T=>{
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



export const mac = <T>(type:String/* ,...argNames:any[] */)=> (args:T)=>{
  const action:{} = {type,...args};
/*   argNames.forEach((...[,index])=>{
      action[argNames[index]]=args[index];
  });
  console.log(action,args); */
  return action ;
}

export const mat = (entity:String):String[] =>([
  `${entity} pending`,
  `${entity} rejected`,
  `${entity} success`
]);

export interface Ierror{
  payload:String
}


export const asyncMac= (asyncTypes:String[]):Function[]=>([
  mac(asyncTypes[0]),
  mac<Ierror>(asyncTypes[1]/* ,'payload' */),
  mac(asyncTypes[2]/* ,'payload' */)
]);

