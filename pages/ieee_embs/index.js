import React from "react";
import Header from "../../components/header";
import CoreMembers from "../../components/core_members";
import Footer from "../../components/footer";
import {Nav, NavAcross} from "../../components/nav";
import Navigation from "../../components/navbar";
import members_data from "../../public/data/ieee_embs/core_members.json"
import Head from "next/head";

function IEEE_EMBS() {
    return (
        <>
            <Head>
                <title>IEEE_EMBS</title>
            </Head>
            <Navigation team_home="/ieee_embs" events="/ieee_embs/events" gallery="/ieee_embs/gallery"></Navigation>
            <Header></Header>
            <Nav></Nav>
            <NavAcross></NavAcross>
            <CoreMembers core_members={members_data} team="EMBS"></CoreMembers>
            <Footer></Footer>   
        </>
    )
}

export default IEEE_EMBS;

