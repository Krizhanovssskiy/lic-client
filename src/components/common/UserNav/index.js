import './style.scss';

import React from 'react';

import sprite from '../../../img/sprite.svg';


const UserNav = () => {
  return (
    <nav className="UserNav">
      <div className="UserNav__icon-box">
        <span className="UserNav__icon-label">Double selfie</span>
        <svg className="UserNav__icon--selfie">
          <use href={`${sprite}#icon-selfie`} />
        </svg>
      </div>
      <div className="UserNav__icon-box">
        <span className="UserNav__icon-label">Notifications</span>
        <svg className="UserNav__icon">
          <use href={`${sprite}#icon-bell`} />
        </svg>
      </div>
      <div className="UserNav__icon-box UserNav__icon-box--active">
        <span className="UserNav__icon-label">Konstancia</span>
        <svg className="UserNav__icon">
          <use href={`${sprite}#icon-user`} />
        </svg>
      </div>
    </nav>
  );
};

export default UserNav;
