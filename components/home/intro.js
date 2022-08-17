/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/
import Link from "next/link";
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
          <li className="inline">
            <Link href="https://www.embs.org/">
              <a>IEEE_EMBS</a>
            </Link>
          </li>
          <li className="inline">
            {" "}
            <span className=" bg-green-100 rounded-full mx-1">.</span>
            <Link href="https://www.computer.org/">
              <a>IEEE_CS</a>
            </Link>
          </li>
          <li className="inline">
            {" "}
            <span className=" bg-green-100 rounded-full  mr-1">.</span>
            <Link href="https://www.comsoc.org/">
              <a>IEEE_ComSoc</a>
            </Link>
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
      <div className="absolute inset-x-0  top-40">
        <p className="text-center text-black font-bold text-lg font-mono border-0 caret-black">
          {" "}
          IEEE Student Branch
        </p>
      </div>
      <img
        style={{ height: "500px", backgroundRepeat: "repeat" }}
        width="150%"
        height="10%"
        src="/assets/intro/SSN.jpg"
      />
      <IMage></IMage>
      <TExt></TExt>
    </div>
  );
}
