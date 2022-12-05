import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('test the rendering of Home function', () => {
  test('Render home elements on page', () => {
    const display = render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>,
    );
    expect(display).toMatchSnapshot();
  });
});
