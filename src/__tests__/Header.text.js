import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('test the rendering of header function', () => {
  test('Render header elements on page', () => {
    const display = render(
      <React.StrictMode>
        <Header />
      </React.StrictMode>,
    );
    expect(display).toMatchSnapshot();
  });
});
