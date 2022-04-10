import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';


 


describe("deber ser true", () => {
  test('igual a igual ',()=>{
    const mensaje='Holamundo';

    const mensaje2='Holamundo';

    expect(mensaje).toBe(mensaje2);


  });


/*   test('renders learn react link', () => {
    render(<App />);

    console.log(screen);

    const linkElement = screen.getByText(/learn react/i);

    console.log(linkElement);

    expect(linkElement).toBeInTheDocument();



  }); */
});
