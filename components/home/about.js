/* formatting used :
        varaible naming : lowerCamelCase
        function naming : UpperCamelCase
        file/folder naming : lowerCamelCase, preferred only small
    */

import Head from "next/head";
import Image from "next/image";

export default function About({ url, name }) {
  return (
    <div className=" h-1/2">
      {/* todo font change indie flower*/}
      <h1 className="text-blue-300 font-bold text-4xl">About Us</h1>
      <span className="font-mono">
        The IEEE student Branch of SSN Engineering College was formed on 2ND MAY
        1998.From then, there has been no looking back we have been very active
        and vibrant till this date. The Student Branch was started with 10
        student members in 1998. Every year the number of student members joined
        in IEEE has increased and presently the Branch has 200+ members. Since
        then it has organized many events to provide outstanding value to its
        members. The objective of starting IEEE Student branch was to create
        awareness about the day today technological developments and to make
        them to utilize the resources available in IEEE. And to make most of our
        student members involve themselves in publishing research papers and
        projects. IEEE's core purpose is to promote technological innovation and
        excellence for the benefit of humanity. IEEE will be essential to the
        global technical community and to technical professionals everywhere,
        and be universally recognized for the contributions of technology and of
        technical professionals in improving global conditions. IEEE is the
        world’s largest technical professional society. It is designed to serve
        professionals involved in all aspects of the electrical, electronic and
        computing fields and related areas of science and technology that
        underlie modern civilization. IEEE’s roots go back to 1884. There was
        one major established electrical industry, the telegraph, which had come
        to connect the world with a communications system faster than the speed
        of transportation. A second major area had only barely gotten
        underway—electric power and light, originating in Thomas Edison’s
        inventions. There are more than 400,000 IEEE members in over 160
        countries around the world. IEEE members are engineers, scientists and
        associated professionals whose technical interests are innate in science
        and technology related fields. IEEE, consisting of 2,173 student
        branches at colleges and universities in 80 countries, has over 107,000
        student members. Women in Engineering (WIE) is one of the patent
        entities of IEEE's Affinity Group. IEEE publishes more than 148
        transactions, journals and magazines. The IEEE Xplore Digital Library
        has over three million documents, available for download and reference.
      </span>
    </div>
  );
}
