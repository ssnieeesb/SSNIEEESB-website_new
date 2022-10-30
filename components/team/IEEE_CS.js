import Head from "next/head";
import Image from "next/image";
import Member from "../team/member";
import IEEECS from "../team/teamData/IEEECS_Data";
export default function IEEE_CS({ url, name }) {
  var members = IEEECS;
  return (
    <div>
      <div className="text-center text-3xl text-red-200 font-bold font-mono">
        IEEE CS Core Members
      </div>
      <div className="flex w-screen justify-center rounded-md">
        <Member className="m-1" member={members.Chair}></Member>
        <Member className="m-1" member={members.ViceChair}></Member>
        <Member className="m-1" member={members.Secretary}></Member>
        <Member className="m-1" member={members.JointSecretary}></Member>
        <Member className="m-1" member={members.Treasurer}></Member>
      </div>
    </div>
  );
}
