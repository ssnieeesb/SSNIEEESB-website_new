/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import Header from "../../../components/utilities/header";
import IEEE from "../../../components/team/IEEE";
import IEEE_EMBS from "../../../components/team/IEEE_EMBS";
import IEEE_CS from "../../../components/team/IEEE_CS";
import IEEE_ComSoc from "../../../components/team/IEEE_ComSoc";
import Faculty from "../../../components/team/Faculty";
import Footer from "../../../components/utilities/footer";

export default function Team() {
  return (
    <div className="h-screen   ">
      <Faculty></Faculty>
      <IEEE></IEEE>
      <IEEE_EMBS></IEEE_EMBS>
      <IEEE_CS></IEEE_CS>
      <IEEE_ComSoc></IEEE_ComSoc>
    </div>
  );
}
