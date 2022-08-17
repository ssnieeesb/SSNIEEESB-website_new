/* formatting used :
        varaible naming : lowerCamelCase
        function naming : UpperCamelCase
        file/folder naming : lowerCamelCase, preferred only small
*/

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

import { NodeNextRequest } from "next/dist/server/base-http/node";
import Head from "next/head";
import Image from "next/image";
import Event from "../events/event";
export default function Upcoming({ url, name }) {
  var events = [
    {
      name: "MEJORAR",
      description: "To infuse with ML knowledge",
      conductedBy: "IEEECS",
      site: { has: false, url: null },
      poster: { has: true, url: "/assets/events/IEEE_CS/MEJORAR.jpg" },
      date: "26-jun-2022",
      time: "9:30am to 1:00pm",
      registration: { has: false, url: null },
    },
    ];
  return (
    <div>
      <div className="text-3xl text-red-200 font-bold font-mono">
        Upcoming Events
      </div>
      <div className="flex w-screen justify-center rounded-md">
        {events.map((eventitem) => {
          return <Event event={eventitem}></Event>;
        })}
      </div>
    </div>
  );
}
