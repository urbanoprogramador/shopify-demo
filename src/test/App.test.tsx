import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
jest.setTimeout(10000);
import App from '../App';

import '@testing-library/jest-dom'





/*

import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json('John Smith'), ctx.delay(150))
  })
]

const server = setupServer(...handlers); */

import { Provider } from 'react-redux';
import { Product } from 'components/public/product/Product';
import { store } from 'core/store/store';
import { Carousel } from 'components/template/carousel/Carousel';
import { MemoryRouter, Route } from 'react-router';
import { Routes } from 'react-router-dom';


describe("Probando el enrutamiento", () => {


  /*   beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close()) */



  test('Prueba uno ', () => {
    const mensaje = 'Holamundo';

    expect(mensaje).toMatchSnapshot();


  });


  test('Prueba 2', () => {
    render(<App />);

    expect(screen.debug()).toMatchSnapshot();
  });


  test('prueba de product', async () => {

    render(<Provider store={store}>
      <MemoryRouter initialEntries={['/product/free-trainer-3-mmw']}>
        <Routes>
          <Route path='/product/:product' element={<Product />} />

        </Routes>
      </MemoryRouter>
    </Provider>
    );
    /*     await waitFor(() => expect(screen.getByTestId('producto')).toMatchSnapshot(), {
          timeout: 8000,
    
        }); */
    await waitFor(() => expect(screen.getByTestId('producto')).toMatchSnapshot(), {
      timeout: 8000,

    });
  });
  test('prueba de Carousel', async () => {
    render(
      <Provider store={store}>
        <Carousel isImg={true} items={['//cdn.shopify.com/s/files/1/0454/8316/3809/products/product-4.jpg?v=1639585159',
          '//cdn.shopify.com/s/files/1/0454/8316/3809/products/product-3.jpg?v=1639585158',
          '//cdn.shopify.com/s/files/1/0454/8316/3809/products/product-2.jpg?v=1639585158',
          '//cdn.shopify.com/s/files/1/0454/8316/3809/products/product-1.jpg?v=1639585159']} />
      </Provider>
    );
    expect(screen.getByTestId('carrusel')).toMatchSnapshot()
    /* await waitFor(() => expect(screen.getByTestId('producto')).toMatchSnapshot(), {
      timeout: 8000,

    }); */
  });

  test('probando al clickear en cantidad de productos', async () => {
    render(<Provider store={store}>
      <MemoryRouter initialEntries={['/product/free-trainer-3-mmw']}>
        <Routes>
          <Route path='/product/:product' element={<Product />} />

        </Routes>
      </MemoryRouter>
    </Provider>
    );
    /*     await waitFor(() => expect(screen.getByTestId('producto')).toMatchSnapshot(), {
          timeout: 8000,
    
        }); */
    await waitFor(() => {}, {
      timeout: 8000,
    });
    const el=document.querySelector('.addCartTesting');
    if(el){
      fireEvent.click(el);
      const input=document.getElementsByClassName('CantidadTesting')[0] as HTMLInputElement;
      expect(input.value ).toBe('1');

    }else{
      throw 'deveria existir el boton';
    }
  });







});
