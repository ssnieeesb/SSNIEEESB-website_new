
import React from 'react';
import Image from 'next/image';

import upcoming_events from '../../public/data/ieee_cs/upcoming_events.json';
import past_events from '../../public/data/ieee_cs/past_events.json';


function Upcoming(){
    // console.log(upcoming_events);
    return(
        <section className="Events">
            <h2>Upcoming Events</h2>
            <div className='events__list'>
        {    
            upcoming_events.map((e=>{
                const img_path = e.image;
                return (
                    <div key={e.title} className="event__card">
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
            </div>
        
        </section>
    );

}


function Past(){
    // console.log(upcoming_events);
    return(
        <section className="Events">
            <h2>Past Events</h2>
            <div className='events__list'>
        {    
            past_events.map((e=>{
                const img_path = e.image;
                return (
                    <div key={e.title} className="event__card">
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
            </div>
        
        </section>
    );

}

// export default Upcoming;
// export default Past;
export {Upcoming, Past};