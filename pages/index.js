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
import Events from "../components/events/events";
import IEEE from "./ieee/index.js";

export default function Home() {
  useEffect(() => {
    localStorage.theme = "dark";
  }, []);
  return (
    <>
        <IEEE></IEEE>
    </>
  );
}
