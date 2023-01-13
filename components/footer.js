import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function FooterSocials() {
  return (
    <div className="footer__socials">
      <a
        href="https://www.linkedin.com/company/ieee-student-branch-ssn/"
        rel="noreferrer"
        target="_blank"
        className='linked'
      >
        <BsLinkedin className='icons' />
      </a>
      <a href="https://github.com/SSN-IEEE" target="_blank" rel="noreferrer">
        <BsGithub className='icons' />
      </a>
      <a
        href="https://www.instagram.com/ieee_ssn/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className='icons'/>
      </a>
    </div>
  );
}

const Footer = () => {
    return (
      <section id="footer">
        <h1>Connect with us</h1>
        <div className="container footer__body">
          <h2>Follow Us for great events</h2>
          <div className="socials">
            <h2>Here are our socials</h2>
            <FooterSocials />
          </div>
        </div>
      </section>
    );
  };
  
  export default Footer;

