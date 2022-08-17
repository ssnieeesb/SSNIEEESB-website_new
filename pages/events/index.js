/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import Header from "../../components/utilities/header";
import Intro from "../../components/home/intro";
import About from "../../components/home/about";
import Footer from "../../components/utilities/footer";
import Past from "../../components/events/past";
import Upcoming from "../../components/events/upcoming";
import Collapsible from "react-collapsible";

function PastButton() {
  return (
    <div className="text-center text-3xl text-red-200 font-bold font-mono">
      Past
    </div>
  );
}

export default function Events() {
  return (
    <div className="h-screen bg-[url('/assets/menu/menu.webp')] ">
      <Header></Header>
      <Collapsible
        trigger={
          <div className=" text-3xl text-red-200 font-bold font-mono">
            Past(click to expand)
          </div>
        }
      >
        <Past></Past>
      </Collapsible>
      <Upcoming></Upcoming>
      <Footer></Footer>
    </div>
  );
}
