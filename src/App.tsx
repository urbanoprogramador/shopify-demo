import React from 'react';
import { Provider } from 'react-redux';
import './core/styles/styles.scss';
import { store } from './core/store/store';
import { AppRouter } from './routers/AppRouter';
import { actionLoadConfigTheme } from './core/store/theme/actions/action';


start();
window.addEventListener('resize', start);

function start(){
  store.dispatch(actionLoadConfigTheme({width:document.documentElement.clientWidth}));
}


function App():JSX.Element {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
