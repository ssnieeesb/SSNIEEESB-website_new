/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import Header from "../../components/utilities/header";
import Footer from "../../components/utilities/footer";

export default function Gallery() {
  return (
    <div className=" h-screen bg-[url('/assets/menu/menu.webp')] ">
      <Header></Header>
      <div className="absolute bottom-1/2 left-[40%] text-red-500 text-5xl">
        UPCOMING!!
      </div>
      <Footer></Footer>
    </div>
  );
}
