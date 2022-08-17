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
export default function Home() {
  return (
    <div className="h-screen bg-[url('/assets/menu/menu.webp')] ">
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Footer></Footer>
    </div>
  );
}
