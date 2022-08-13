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
      <div class="absolute inset-x-0  top-40">
        <p class="text-center text-black font-bold text-lg font-mono border-0 caret-black">
          {" "}
          IEEE Student Branch
        </p>
      </div>
      <img
        style={{ height: "500px" }}
        width="150%"
        height="10%"
        src="/assets/intro/SSN.jpg"
      />
    </div>
  );
}
