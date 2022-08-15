/*
member card{
	post: {name, image, 
	contactlinks:{
	"Email":{hasmail:T/F,url:}
	"Linkedin":{haslinkedin:True/F,url: }
	"Github":{hasgithub:T/F,url:}
	"Instagram":{}
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

export default function Member({ url, name }) {
  return (
    <a class="hover:bg-[#ddd] hover:text-[black]" href={url}>
      {name}
    </a>
  );
}
