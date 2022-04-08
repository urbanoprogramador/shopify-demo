

const theme='[admin campaign]';

export const typeTheme={
  loadConfig:`${theme} loadConfig`
}

export const themeReducer=(state={},action)=>{
  switch(action.type) {
    case typeTheme.loadConfig:{
      const valor=action.payload;
      return {...state,...valor};
    }
    default:
      return state
  }
}