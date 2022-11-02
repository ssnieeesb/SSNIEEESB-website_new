import React from 'react';
import SSN from '../public/assets/intro/SSN.jpg';
import ssn_data from '../public/data/ssn.json'

const Header = () => {
  return (
    <section id="header">
      <h1>Welcome to SSN IEEE</h1>
      <h2>About SSN</h2>
      <div className="header header__head">
        <div className="about__ssn">
          <img src={SSN.src} alt="ssn" className="ssn" />
          <p className="about">
           {ssn_data.description}
          </p>
        </div>
        <div className="about__ieee">
          <h2>What do we do?</h2>
          <h3 className="about__ieee_text">
            The primary purpose of IEEE student branch is to Inspire, Enable,
            Empower and Energize our student members to enhance their technical
            interests by providing them a platform to showcase their skills
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Header;