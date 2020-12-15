import React from 'react';

const Team = props => {
    const {details} = props;

    if(!details){
        return <h3>Fetching your team details...</h3>
    }
    return(
        <div className="teamContainer">
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    );
}

export default Team;