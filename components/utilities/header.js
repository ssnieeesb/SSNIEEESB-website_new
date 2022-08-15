/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import Menu from "../utilities/menu";
export default function Header() {
  return (
    <div>
      <Head>
        <title>SSN IEEESB</title>
        <meta name="description" content="SSN IEEE Student Branch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Menu></Menu>
    </div>
  );
}
