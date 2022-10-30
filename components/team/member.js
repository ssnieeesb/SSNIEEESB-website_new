/*
member card{
	post: {name, image,post
	contactlinks:{
	"Email":{hasmail:T/F,url:}
	"Linkedin":{haslinkedin:True/F,url: }
	"Github":{hasgithub:T/F,url:}
	"Instagram":{},
  "onclick": url
	}} 
}

*/
/* formatting used :
        varaible naming : lowerCamelCase
        function naming : UpperCamelCase
        file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";

export default function Member({ member }) {
  console.log("member", member);
  return (
    <div className="hover:shadow-sm hover:shadow-white max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
      <a href={member.contact.onclick["has"] ? member.contact.onclick.url : ""}>
        <img
          className="mx-auto mt-5 rounded-full"
          src={member.image}
          width="200px"
          alt={member.name}
        />
        <div className="p-2">
          <h4 className="text-center mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h4>
          <h5 className="text-center mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-green-200">
            {member.post}
          </h5>
        </div>
      </a>
    </div>
  );
}
