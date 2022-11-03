import React from 'react';
import Image from 'next/image';


const CoreMembers = ({core_members, team}) => {

    return (
        <section id="body">
            <h1>Our SSN IEEE Members</h1>
            <div className="container body__header">
                {/* <div className="ieee_faculties">
                    <h2>Faculty Members</h2>
                    <div className="faculty__card">
                        <Image src={ieee_data.faculty.image} height="200px" width="200px" alt={ieee_data.faculty.post} className="facultyimg" />
                        <h3>{ieee_data.faculty.name}</h3>
                        <h4>{ieee_data.faculty.post}</h4>
                    </div>
                </div> */}

                <div className="core__members">
                    <h2>IEEE {team} Core Members</h2>
                    <div className="members__list">

                        {
                            core_members.map((person)=>{
                                return (
                                    <article key={person.name} className="member__card">
                                        <Image src={person.image} alt={person.post} className='img' height="300px" width="250px"/>
                                        <h3>{person.name}</h3>
                                        <h5>{person.post}</h5>
                                    </article >
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreMembers;