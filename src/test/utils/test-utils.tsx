// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
/* import { configureStore } from '@reduxjs/toolkit' */
import { Provider } from 'react-redux'
// Import your own reducer
import { store  } from './../../core/store/store';

function render(
  ui,
  /* {
    undefined,
    store = configureStore({ reducer: store2, preloadedState }),
    ...renderOptions
  } = {} */
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }