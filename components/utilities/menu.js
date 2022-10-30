/* formatting used :
	varaible naming : lowerCamelCase
	function naming : UpperCamelCase
	file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";
import MenuItem from "../utilities/menu-item";
<link
  href="https://fonts.googleapis.com/css?family=Indie Flower"
  rel="stylesheet"
></link>;
export default function Menu() {
  let menulist = [{ url: "/", text: "Home" }];
  return (
    <span className="inline ">
      <img
        src="/logo/ieee_transparent.png"
        layout="responsive"
        height="3%"
        width="6%"
        className="inline"
      />
      <img
        src="/logo/ssn_logo_blue_transparent.png"
        layout="responsive"
        height="2%"
        width="4%"
        className="inline"
      />
      <span className="flex-auto">
        <MenuItem url={"/"} name={"Home"}></MenuItem>
        <MenuItem url={"/events"} name={"Events"}></MenuItem>
        <MenuItem url={"/gallery"} name={"Gallery"}></MenuItem>
        <MenuItem url={"/team"} name={"Team"}></MenuItem>
      </span>
    </span>
  );
}
