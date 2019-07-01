import './style.scss';

import React from 'react';
import Header from '../common/Header';
import GoogleAuth from '../GoogleAuth';

const App = () => {
  return (
    <div>
      <Header />
      <GoogleAuth />
    </div>
  );
};

export default App;
