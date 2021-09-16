import React, { useState } from 'react'

function Brewery({ breweriesObject }) {
    const { image, name, street, postal_code, state, phone, website, details } = breweriesObject
    const [isClicked, setIsClicked] = useState(true)

    function handleToggleClick() {
        setIsClicked((previousIsClicked) => {
            return !previousIsClicked
        })
    }

    return (
        <div onClick={handleToggleClick}>
            {isClicked ? (
            <div className="card">
                <img className="cardImage" src={image} alt={name}/>
                <h3>{name}</h3>
                <h4>Address: {street} {postal_code}, {state}</h4>
                <h5>Phone #: {phone}</h5>
                <a href={website}>Visit Website! </a>
            </div>
            ) : (
            <div className="card">
                <h6>{details}</h6>
            </div>
            )}
        </div>
    )
}

export default Brewery