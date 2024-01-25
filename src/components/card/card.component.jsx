import React from "react";
import './card.styles.css'

const Card = ({ monster }) => {
    const { id, name, email, phone } = monster;

    return (    
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${id}?set=set2`} />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
};

export default Card;
