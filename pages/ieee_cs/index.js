import React from "react";
import Header from "../../components/header";
import CoreMembers from "../../components/core_members";
import Footer from "../../components/footer";
import {Nav, NavAcross} from "../../components/nav";
import Navigation from "../../components/navbar";
import members_data from "../../public/data/ieee_cs/core_members.json"
import Head from "next/head";

function IEEE_CS() {
    return (
        <>
            <Head>
                <title>IEEE_CS</title>
            </Head>
            <Navigation team_home="/ieee_cs" events="/ieee_cs/events" gallery="/ieee_cs/gallery"></Navigation>
            <Header></Header>
            <Nav></Nav>
            <NavAcross></NavAcross>
            <CoreMembers core_members={members_data} team="CS"></CoreMembers>
            <Footer></Footer>   
        </>
    )
}

export default IEEE_CS;

