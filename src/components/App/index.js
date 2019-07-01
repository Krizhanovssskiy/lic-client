import './style.scss';

import React from 'react';
import Header from '../common/Header';
import GoogleAuth from '../GoogleAuth';
import Content from '../Content';

const App = () => {
  return (
    <div>
      <Header />
      <GoogleAuth />
      <Content />
    </div>
  );
};

export default App;
