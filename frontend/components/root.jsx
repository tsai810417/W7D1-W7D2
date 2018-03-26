import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({dataPos, store}) => {
  console.dir(dataPos);
  console.dir(store);
  return (
  <Provider store={ store }>
    <App />
  </Provider>
);
};

export default Root;
