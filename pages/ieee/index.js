import React from "react";
import Header from "../../components/header";
import CoreMembers from "../../components/core_members";
import Footer from "../../components/footer";
import {Nav, NavAcross} from "../../components/nav";
import Navigation from "../../components/navbar";
import faculty from "../../public/data/ieee/faculty.json"
import Head from "next/head";

function IEEE() {
    return (
        <>
            <Head>
                <title>IEEE</title>
            </Head>
            <Navigation team_home="/ieee" events="/ieee/events" gallery="/ieee/gallery"></Navigation>
            <Header></Header>
            <Nav></Nav>
            <NavAcross></NavAcross>
            <CoreMembers core_members={faculty} team="IEEE"></CoreMembers>
            <Footer></Footer>   
        </>
    )
}

export default IEEE;

