import './style.scss';

import React from 'react';
import SectionMenu from '../SectionMenu';

const UserDetails = () => {
  const titles = ['Portfolio', 'CV'];


  return (
    <section className="UserDetails">
      <SectionMenu titles={titles} />
    </section>
    
  );
};

export default UserDetails;
