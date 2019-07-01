import './style.scss';

import React from 'react';
import SectionMenu from '../SectionMenu';

const UserDetails = () => {
  const titles = ['Portfolio', 'CV'];


  return (
    <section className="Features">
      <SectionMenu titles={titles} />
    </section>
  );
};

export default UserDetails;
