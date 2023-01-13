import React from 'react';
import { IoIosSchool } from 'react-icons/io';
import { RiTeamLine } from 'react-icons/ri';
import { VscDebugDisconnect } from 'react-icons/vsc';
import Link from 'next/link';
import { useState } from 'react';

const NavAcross = () => {
  return (
    <nav id="across_nav">
      <Link href="/ieee">
        <a>
        🏠 Home
        </a>
      </Link>
      <Link href="/ieee_cs">
        <a>
          CS
        </a>
      </Link>
      <Link href="/ieee_photonics">
        <a>
          PHOTONICS
        </a>
      </Link>
      <Link href="/ieee_embs">
        <a>
          EMBS
        </a>
      </Link>
      <Link href="/ieee_comsoc">
        <a>
          COMSOC
        </a>
      </Link> 
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