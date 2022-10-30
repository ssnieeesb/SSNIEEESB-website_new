/* formatting used :
        varaible naming : lowerCamelCase
        function naming : UpperCamelCase
        file/folder naming : lowerCamelCase, preferred only small
*/

import { NodeNextRequest } from "next/dist/server/base-http/node";
import Head from "next/head";
import Image from "next/image";
import Member from "../team/member";
import faculties from "../team/teamData/FacultyData";
export default function IEEE({ url, name }) {
  var members = faculties;
  return (
    <div className="items-center p-1 m-3 rounded-xl">
      <div className="text-center text-3xl text-red-500 font-bold font-mono">
        Faculty Members
      </div>
      <div className="rounded-md flex justify-center ">
        <Member className="m-1" member={members[0]}></Member>
      </div>
    </div>
  );
}
