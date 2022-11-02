import React from 'react';
import faculty from '../../public/assets/team/IEEE/faculty0.jpg'
import chair from '../../public/assets/team/IEEE_CS/Heads/Chair.jpg'
import Secretary from '../../public/assets/team/IEEE_CS/Heads/Secretary.jpg'
import Treasurer from '../../public/assets/team/IEEE_CS/Heads/Treasurer.jpg'
import Vicechair from '../../public/assets/team/IEEE_CS/Heads/Vice_Chair.jpg'
import jointsec from '../../public/assets/team/IEEE_CS/Heads/Joint_Secretary.jpg'

import core_members from '../../public/data/ieee_cs/core_members.json'
import ieee_data from '../../public/data/ieee.json'


const Body = () => {
  return (
    <section id="body">
      <h1>Our SSN IEEE Members</h1>
      <div className="container body__header">
        <div className="ieee_faculties">
          <h2>Faculty Members</h2>
          <div className="faculty__card">
            <img src={faculty.src} alt="faculty" className="facultyimg" />
            <h3>{ieee_data.faculty}</h3>
            <h4>Faculty Incharge</h4>
          </div>
        </div>
        <div className="core__members">
          <h2>IEEE CS Core Members</h2>
          <div className="members__list">
            <article className="member__card">
              <img src={chair.src} alt="Chair" className='img' />
              <h3>{core_members.chair}</h3>
              <h5>Chair</h5>
            </article >
            <article className="member__card">
              <img src={Vicechair.src} alt="Vice Chair" className='img' />
              <h3>{core_members.vice_chair}</h3>
              <h5>Vice Chair</h5>
            </article >
            <article className="member__card">
              <img src={Secretary.src} alt="Secretary" className='img' />
              <h3>{core_members.secretary}</h3>
              <h5>Secretary</h5>
            </article>
            <article className="member__card">
              <img src={jointsec.src} alt="Joint Secretary" className="img" />
              <h3>{core_members.joint_secretary}</h3>
              <h5>Joint Secretary</h5>
            </article>
            <article className="member__card">
              <img src={Treasurer.src} alt="Treasurer" className="img" />
              <h3>{core_members.treasurer}</h3>
              <h5>Treasurer</h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;