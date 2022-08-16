/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import Menu from "../utilities/menu";
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
    </div>
  );
}
