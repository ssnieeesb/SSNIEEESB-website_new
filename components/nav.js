import React from 'react';
import { IoIosSchool } from 'react-icons/io';
import { RiTeamLine } from 'react-icons/ri';
import { VscDebugDisconnect } from 'react-icons/vsc';

import { useState } from 'react';

const NavAcross = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav id="across_nav">
      <a href="/ieee_cs">
        CS
      </a>
      <a href="/ieee_photonics">
        PHOTONICS
      </a>
      <a href="/ieee_embs">
        EMBS
      </a>
      <a href="/ieee_comsoc">
        COMSOC
      </a>
    </nav>
  );
}


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <IoIosSchool />
      </a>
      <a
        href="#body"
        onClick={() => setActiveNav('#body')}
        className={activeNav === '#body' ? 'active' : ''}
      >
        <RiTeamLine />
      </a>
      <a
        href="#footer"
        onClick={() => setActiveNav('#footer')}
        className={activeNav === '#footer' ? 'active' : ''}
      >
        <VscDebugDisconnect />
      </a>
    </nav>


  );
};

export { NavAcross, Nav };