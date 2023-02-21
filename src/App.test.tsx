import React from 'react';
import { providersRender } from './store/tests';
import App from './App';

test('renders react component', async () => {
  providersRender(
    <App />
  );
});
