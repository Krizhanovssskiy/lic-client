import './style.scss';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../common/Header';
import Content from '../Content';
import Register from '../Register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Content} />
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
