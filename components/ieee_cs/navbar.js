import React from 'react';
import Link from 'next/link';

const Navigation = () =>{
  return (
    <div>
      <div className="navbar">

        <div className="links">
          <ul>
            <li>
              <Link href="/ieee_cs">
                <h2 className="Linktext">IEEE_CS</h2>
              </Link>
            </li>
            <li>
              <Link href="/ieee_cs/events">
                <h2 className="Linktext">Events</h2>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Navigation;