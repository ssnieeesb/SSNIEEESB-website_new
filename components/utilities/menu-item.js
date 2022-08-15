/* formatting used :
        varaible naming : lowerCamelCase
        function naming : UpperCamelCase
        file/folder naming : lowerCamelCase, preferred only small
    */

import Head from "next/head";
import Image from "next/image";

export default function MenuItem({ url, name }) {
  return (
    <div className="inline p-5 text-[150%] m-10">
      <a className="hover:bg-[#ddd] hover:text-[black]" href={url}>
        {name}
      </a>
    </div>
  );
}
