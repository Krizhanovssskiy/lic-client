import './style.scss';

import sprite from '../../img/sprite.svg';

import React from 'react';

const UserContacts = () => {
  return (
    <section className="UserContacts">
      <div className="UserContacts__header">
        <div className="UserContacts__title-box">
          <h3 className="UserContacts__title">Contacts</h3>
          <span className="UserContacts__quantity">145</span>
        </div>
        <div className="UserContacts__icons-box">
          <svg className="UserContacts__icon UserContacts__icon--active">
            <use href={`${sprite}#icon-contacts-pause`} />
          </svg>
          <svg className="UserContacts__icon">
            <use href={`${sprite}#icon-contacts-menu`} />
          </svg>
          <svg className="UserContacts__icon">
            <use href={`${sprite}#icon-contacts-chevron-left`} />
          </svg>
          <svg className="UserContacts__icon">
            <use href={`${sprite}#icon-contacts-chevron-right`} />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default UserContacts;
