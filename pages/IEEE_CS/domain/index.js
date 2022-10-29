/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import Header from "../../components/utilities/header";
import Footer from "../../components/utilities/footer";
export default function Domain() {
  return (
    <div className="h-screen   ">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
