import React from 'react'

function Brewery({ breweriesObject }) {
    const { image, name, street, postal_code, state, phone, website, details } = breweriesObject

    return (
        <div className="card">
            <img className="cardImage" src={image} alt={name}/>
            <h3>{name}</h3>
            <h4>Address: {street} {postal_code}, {state}</h4>
            <h5>Phone #: {phone}</h5>
            <a href={website}>{website}</a>
            <h6>{details}</h6>
        </div>
    )
}

export default Brewery