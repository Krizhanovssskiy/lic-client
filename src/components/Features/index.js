import './style.scss';

import React from 'react';
import Card from '../Card';

const Features = () => {
  return (
    <section className="Features">
      <div className="Features__title-container">
        <div className="Features__title-box Features__title-box--active">
          <h3 className="Features__title">Services</h3>
        </div>
        <div className="Features__title-box">
          <h3 className="Features__title">Shop</h3>
        </div>
        <div className="Features__title-box">
          <h3 className="Features__title">Auction</h3>
        </div>
      </div>
      <div className="Features__photo-container hide-scroll">
        <ul className="Features__photo-list">
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </section>
  );
};

export default Features;
