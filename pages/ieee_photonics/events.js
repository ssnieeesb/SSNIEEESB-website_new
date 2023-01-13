import React from 'react';
import {Upcoming, Past} from '../../components/events';
import Navigation from '../../components/navbar';
import Head from 'next/head';
import {Nav, NavAcross} from "../../components/nav";
import upcoming_events from '../../public/data/ieee_photonics/upcoming_events.json';
import past_events from '../../public/data/ieee_photonics/past_events.json';

const Events = () => {
    
  return (
    <>
      <Head>
        <title>IEEE_PHOTONICS</title>
      </Head>
      <NavAcross></NavAcross>
      <Navigation team_home="/ieee_photonics" events="/ieee_photonics/events" gallery="/ieee_photonics/gallery"></Navigation>
      <Upcoming data={upcoming_events}></Upcoming>
      <Past data={past_events}></Past>
    </>
  );
};

export default Events;