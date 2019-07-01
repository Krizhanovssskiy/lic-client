import './style.scss';

import React from 'react';
import UserView from '../UserView';
import Features from '../Features';
import UserMainInfo from '../UserMainInfo';
import UserDetails from '../UserDetails';

const Content = () => {
  return (
    <div className="Content">
      <UserView />
      <Features />
      <div>UserContacts</div>
      <UserMainInfo />
      <UserDetails />
    </div>
  );
};

export default Content;
