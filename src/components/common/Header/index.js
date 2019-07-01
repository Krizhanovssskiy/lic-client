import './style.scss';

import React from 'react';
import Search from '../Search';
import Container from '../Container';


const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header__title">Lic</h1>
      <Search />
      <Container />
    </header>
  );
};

export default Header;
