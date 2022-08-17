import Head from "next/head";
import Image from "next/image";
import Member from "../team/member";
export default function IEEE_CS({ url, name }) {
  var members = {
    Chair: {
      name: "Anni Priscilla",
      image: "/assets/team/IEEE_CS/Heads/Chair.jpg",
      post: "Chair",
      contact: {
        email: { has: true, url: "mailto:sreesharmilat@ssn.edu.in" },
        linkedin: {
          has: true,
          url: "https://www.linkedin.com/in/sree-sharmila-443710a0/?originalSubdomain=in",
        },
        github: {
          has: false,
          url: null,
        },
        instagram: {
          has: false,
          url: null,
        },
        onclick: {
          has: true,
          url: "https://www.ssn.edu.in/staff-members/dr-t-sree-sharmila/",
        },
      },
    },
    ViceChair: {
      name: "Karthik Raja A",
      image: "/assets/team/IEEE_CS/Heads/Vice_Chair.jpg",
      post: "Vice Chair",
      contact: {
        email: { has: true, url: "mailto:sreesharmilat@ssn.edu.in" },
        linkedin: {
          has: true,
          url: "https://www.linkedin.com/in/sree-sharmila-443710a0/?originalSubdomain=in",
        },
        github: {
          has: false,
          url: null,
        },
        instagram: {
          has: false,
          url: null,
        },
        onclick: {
          has: true,
          url: "https://www.ssn.edu.in/staff-members/dr-t-sree-sharmila/",
        },
      },
    },
    Treasurer: {
      name: "Anirudh A",
      image: "/assets/team/IEEE_CS/Heads/Treasurer.jpg",
      post: "Treasurer",
      contact: {
        email: { has: true, url: "mailto:sreesharmilat@ssn.edu.in" },
        linkedin: {
          has: true,
          url: "https://www.linkedin.com/in/sree-sharmila-443710a0/?originalSubdomain=in",
        },
        github: {
          has: false,
          url: null,
        },
        instagram: {
          has: false,
          url: null,
        },
        onclick: {
          has: true,
          url: "https://www.ssn.edu.in/staff-members/dr-t-sree-sharmila/",
        },
      },
    },
    Secretary: {
      name: "Shreya",
      image: "/assets/team/IEEE_CS/Heads/Secretary.jpg",
      post: "Treasurer",
      contact: {
        email: { has: true, url: "mailto:sreesharmilat@ssn.edu.in" },
        linkedin: {
          has: true,
          url: "https://www.linkedin.com/in/sree-sharmila-443710a0/?originalSubdomain=in",
        },
        github: {
          has: false,
          url: null,
        },
        instagram: {
          has: false,
          url: null,
        },
        onclick: {
          has: true,
          url: "https://www.ssn.edu.in/staff-members/dr-t-sree-sharmila/",
        },
      },
    },
    JointSecretary: {
      name: "Nusaiba Afsheen",
      image: "/assets/team/IEEE_CS/Heads/Joint_Secretary.jpg",
      post: "Joint Secretary",
      contact: {
        email: { has: true, url: "mailto:sreesharmilat@ssn.edu.in" },
        linkedin: {
          has: true,
          url: "https://www.linkedin.com/in/sree-sharmila-443710a0/?originalSubdomain=in",
        },
        github: {
          has: false,
          url: null,
        },
        instagram: {
          has: false,
          url: null,
        },
        onclick: {
          has: true,
          url: "https://www.ssn.edu.in/staff-members/dr-t-sree-sharmila/",
        },
      },
    },
  };
  console.log(members);
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
