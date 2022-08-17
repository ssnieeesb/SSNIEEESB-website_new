/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import Menu from "../utilities/menu";
import Typewriter from "typewriter-effect";

function IMage() {
  return (
    <div className="pb-10 mb-10">
      <img className="float-right" src="/assets/intro/SSN.jpg" />
      {/* adjust height */}
    </div>
  );
}

function TExt() {
  return (
    <div className="h-full pb-20 mb-10">
      <div className="text-red-400 text-center text-6xl font-bold">
        IEEE Branches
      </div>
      <div className="text-center">
        <ul className="text-green-200">
          <li className="inline"> IEEE_EMBS</li>
          <li className="inline">
            {" "}
            <span className=" bg-green-100 rounded-full mx-1">.</span>
            IEEE_CS
          </li>
          <li className="inline">
            {" "}
            <span className=" bg-green-100 rounded-full  mr-1">.</span>
            IEEE_ComSoc
          </li>
        </ul>
      </div>
      <div className="text-center text-2xl">
        <Typewriter
          options={{
            strings: ["Inspiring Students", "Imparting knowledge", "Zingo"],
            autoStart: true,
            loop: true,
            delay: 100,
            pauseFor: 1000,
          }}
        />
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <div>
      <IMage></IMage>
      <TExt></TExt>
    </div>
  );
}
