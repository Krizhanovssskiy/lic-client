import './style.scss';
import sprite from '../../img/sprite.svg';
import girl from '../../img/girl.png';

import React from 'react';

const UserMainInfo = () => {
  return (
    <section className="UserMainInfo">
      <h2 className="UserMainInfo__username">Konstancia Algremonto</h2>
      <p className="UserMainInfo__userspec">UX/UI Designer</p>
      <ul className="UserMainInfo__icon-container">
        <li className="UserMainInfo__icon-box">
          <svg className="UserMainInfo__icon UserMainInfo__icon--active">
            <use href={`${sprite}#icon-instagram`} />
          </svg>
        </li>
        <li className="UserMainInfo__icon-box">
          <svg className="UserMainInfo__icon">
            <use href={`${sprite}#icon-facebook`} />
          </svg>
        </li>
        <li className="UserMainInfo__icon-box">
          <svg className="UserMainInfo__icon UserMainInfo__icon--active">
            <use href={`${sprite}#icon-twitter`} />
          </svg>
        </li>
        <li className="UserMainInfo__icon-box">
          <svg className="UserMainInfo__icon UserMainInfo__icon--active">
            <use href={`${sprite}#icon-telegram`} />
          </svg>
        </li>
        <li className="UserMainInfo__icon-box">
          <svg className="UserMainInfo__icon">
            <use href={`${sprite}#icon-whatsapp`} />
          </svg>
        </li>
        <li className="UserMainInfo__icon-box">
          <svg className="UserMainInfo__icon">
            <use href={`${sprite}#icon-linkedin`} />
          </svg>
        </li>
        <li className="UserMainInfo__icon-box">
          <svg className="UserMainInfo__icon">
            <use href={`${sprite}#icon-vk`} />
          </svg>
        </li>
        <li>
          <svg className="UserMainInfo__icon">
            <use href={`${sprite}#icon-share`} />
          </svg>
        </li>
      </ul>
      <div className="UserMainInfo__contact-container">
        <div className="UserMainInfo__contact-box">
          <p className="UserMainInfo__contact">My Website</p>
          <p className="UserMainInfo__contact">https://design.lic.bz</p>
        </div>
        <div className="UserMainInfo__contact-box">
          <p className="UserMainInfo__contact">Phone</p>
          <p className="UserMainInfo__contact">+79814028502</p>
        </div>
        <div className="UserMainInfo__contact-box">
          <p className="UserMainInfo__contact">E-mail</p>
          <p className="UserMainInfo__contact">aleksey.stepikin@gmail.com</p>
        </div>
      </div>
      <ul className="UserMainInfo__video-container">
        <li className="UserMainInfo__video-item">
          <div className="UserMainInfo__video-box UserMainInfo__video-box--active">
            <img src={girl} alt="" className="UserMainInfo__video-preview" />
            <svg className="UserMainInfo__icon-play">
              <use href={`${sprite}#icon-triangle`} />
            </svg>
          </div>
          <span className="UserMainInfo__video-title">About me shortly</span>
        </li>
        <li className="UserMainInfo__video-item">
          <div className="UserMainInfo__video-box">
            <img src={girl} alt="" className="UserMainInfo__video-preview" />
            <svg className="UserMainInfo__icon-play">
              <use href={`${sprite}#icon-triangle`} />
            </svg>
          </div>
          <span className="UserMainInfo__video-title">About my services</span>
        </li>
        <li className="UserMainInfo__video-item">
          <div className="UserMainInfo__video-box">
            <img src={girl} alt="" className="UserMainInfo__video-preview" />
            <svg className="UserMainInfo__icon-play">
              <use href={`${sprite}#icon-triangle`} />
            </svg>
          </div>
          <span className="UserMainInfo__video-title">About my products</span>
        </li>
        <li className="UserMainInfo__video-item">
          <div className="UserMainInfo__video-box">
            <img src={girl} alt="" className="UserMainInfo__video-preview" />
            <svg className="UserMainInfo__icon-play">
              <use href={`${sprite}#icon-triangle`} />
            </svg>
          </div>
          <span className="UserMainInfo__video-title">For fans</span>
        </li>
      </ul>
    </section>
  );
};

export default UserMainInfo;
