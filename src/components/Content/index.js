import './style.scss';

import React from 'react';
import UserView from '../UserView';
import Features from '../Features';
import UserMainInfo from '../UserMainInfo';

const Content = () => {
  return (
    <div className="Content">
      <UserView />
      <Features />
      <div>UserContacts</div>
      <UserMainInfo />
      <div>UserDetails</div>
    </div>
  );
};

export default Content;
