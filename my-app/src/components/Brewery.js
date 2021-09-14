import React from 'react'

function Brewery({ breweriesObject }) {
    console.log(breweriesObject)
    const { name, street, postal_code, state, phone, website } = breweriesObject

    return (
        <tr>
            <td>{name}</td>
            <td>{street} {postal_code}, {state}</td>
            <td>{phone}</td>
            <td>{website}</td>
        </tr>
    )
}

export default Brewery