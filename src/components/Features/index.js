import './style.scss';

import React from 'react';
import Card from '../Card';
import SectionMenu from '../SectionMenu';

const Features = () => {
  const titles = ['Services', 'Shop', 'Auction'];

  return (
    <section className="Features">
      <SectionMenu titles={titles} />
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
