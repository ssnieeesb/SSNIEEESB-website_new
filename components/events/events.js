/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import Header from "../utilities/header";
import Intro from "../home/intro";
import About from "../home/about";
import Footer from "../utilities/footer";
import Past from "./past";
import Upcoming from "./upcoming";
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
    <div className="h-screen   ">
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
    </div>
  );
}
