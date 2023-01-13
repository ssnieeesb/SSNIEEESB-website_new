import React from "react";
import Header from "../../components/header";
import CoreMembers from "../../components/core_members";
import Footer from "../../components/footer";
import {Nav, NavAcross} from "../../components/nav";
import Navigation from "../../components/navbar";
import members_data from "../../public/data/ieee_photonics/core_members.json"
import Head from "next/head";

function IEEE_PHOTONICS() {
    return (
        <>
            <Head>
                <title>IEEE_PHOTONICS</title>
            </Head>
            <Navigation team_home="/ieee_photonics" events="/ieee_photonics/events" gallery="/ieee_photonics/gallery"></Navigation>
            <Header></Header>
            <Nav></Nav>
            <NavAcross></NavAcross>
            <CoreMembers core_members={members_data} team="PHOTONICS"></CoreMembers>
            <Footer></Footer>   
        </>
    )
}

export default IEEE_PHOTONICS;

