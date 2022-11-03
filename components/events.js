
import React from 'react';
import Image from 'next/image';


function Upcoming({data}){
    // console.log(upcoming_events);
    return(
        <section className="Events">
            <h2>Upcoming Events</h2>
            <div className='events__list'>
        {    
            data.map((e=>{
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


function Past({data}){
    // console.log(upcoming_events);
    return(
        <section className="Events">
            <h2>Past Events</h2>
            <div className='events__list'>
        {    
            data.map((e=>{
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