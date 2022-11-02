
import React from 'react';
import Image from 'next/image';

import upcoming_events from '../../public/data/ieee_cs/upcoming_events.json';
import past_events from '../../public/data/ieee_cs/past_events.json';


function Upcoming(){
    // console.log(upcoming_events);
    return(
        <section className="Events">
            <h2>Upcoming Events</h2>

        {    
            upcoming_events.map((e=>{
                const img_path = "/assets/team/IEEE_CS/Events/" + e.image;
                return (
                    <div className="upcoming__events">
                        <Image src={img_path} height="300px" width="300px" alt="" className="event__img" />
                        <div className="event_desc">
                            <h1>{e.title}</h1>
                            <p>
                                {e.description}
                                <br></br>
                                Date: {e.date} 
                                <br></br>
                                Venue: {e.venue}
                            </p>
                        </div>
                        <br></br>
                    </div>
                )

            }))
            
        }
        
        </section>
    );

}


function Past(){
    // console.log(upcoming_events);
    return(
        <section className="Events">
            <h2>Past Events</h2>
        {    
            past_events.map((e=>{
                const img_path = "/assets/team/IEEE_CS/Events/" + e.image;
                return (
                    <div className="upcoming__events">
                        <Image src={img_path} height="300px" width="300px" alt="" className="event__img" />
                        <div className="event_desc">
                            <h1>{e.title}</h1>
                            <p>
                                {e.description}
                                <br></br>
                                Date: {e.date} 
                                <br></br>
                                Venue: {e.venue}
                            </p>
                        </div>
                        <br></br>
                    </div>
                )

            }))
            
        }
        
        </section>
    );

}

// export default Upcoming;
// export default Past;
export {Upcoming, Past};