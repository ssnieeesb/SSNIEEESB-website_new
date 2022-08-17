/*
Events{
    name:
	description:{}
	conductedBy:
	site:{hassite: ,url:}
	poster:{hasposter: , url:}
	date: { }
	Time: { } //format
	register: {hasregister: , url:}
	onclick: {has:,url:}
}
*/

/* formatting used :
        varaible naming : lowerCamelCase
        function naming : UpperCamelCase
        file/folder naming : lowerCamelCase, preferred only small
*/

import Head from "next/head";
import Image from "next/image";

export default function Event({ event }) {
  return (
    <div className="hover:shadow-sm hover:shadow-white max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
      <img
        className="mx-auto mt-5 rounded-full"
        src={event.poster.url}
        width="200px"
        alt={event.name}
      />
      <div className="p-2">
        <h4 className="text-center mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {event.name}
        </h4>
        <h5 className="text-center mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-green-200">
          {event.description}
        </h5>
      </div>
    </div>
  );
}
