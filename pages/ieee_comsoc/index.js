import React from "react";
import Header from "../../components/header";
import CoreMembers from "../../components/core_members";
import Footer from "../../components/footer";
import {Nav, NavAcross} from "../../components/nav";
import Navigation from "../../components/navbar";
import members_data from "../../public/data/ieee_comsoc/core_members.json"
import Head from "next/head";

function IEEE_COMSOC() {
    return (
        <>
            <Head>
                <title>IEEE_COMSOC</title>
                <link rel="icon" href="/icons/favicon.ico" />
            </Head>
            <Navigation team_home="/ieee_comsoc" events="/ieee_comsoc/events" gallery="/ieee_comsoc/gallery"></Navigation>
            <Header></Header>
            <Nav></Nav>
            <NavAcross></NavAcross>
            <CoreMembers core_members={members_data} team="COMSOC"></CoreMembers>
            <Footer></Footer>   
        </>
    )
}

export default IEEE_COMSOC;

