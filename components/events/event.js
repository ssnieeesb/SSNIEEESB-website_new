/* formatting used :
        varaible naming : lowerCamelCase
        function naming : UpperCamelCase
        file/folder naming : lowerCamelCase, preferred only small
    */

import Head from "next/head";
import Image from "next/image";

export default function Event({ url, name }) {
  return (
    <a className="hover:bg-[#ddd] hover:text-[black]" href={url}>
      {name}
    </a>
  );
}
