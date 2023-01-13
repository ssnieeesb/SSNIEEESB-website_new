import React from 'react';
import Link from 'next/link';

const Navigation = ({team_home,events,gallery}) =>{
  return (
    <div>
      <div className="navbar">

        <div className="links">
          <ul>
            <li>
              <Link href={team_home}>
                <h2 className="Linktext">Team Home</h2>
              </Link>
            </li>
            <li>
              <Link href={events}>
                <h2 className="Linktext">Events</h2>
              </Link>
            </li>
            <li>
              <Link href={gallery}>
                <h2 className="Linktext">Gallery</h2>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Navigation;