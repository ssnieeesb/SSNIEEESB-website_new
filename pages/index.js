/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/utilities/header";
import Footer from "../components/utilities/footer";
import Intro from "../components/home/intro";
import About from "../components/home/about";
import React, { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.theme = "dark";
  }, []);
  return (
    <div className="h-screen">
      <Header className="sticky top-0"></Header>
      <Intro></Intro>
      {/* <About></About>
      <Footer></Footer> */}
    </div>
  );
}
