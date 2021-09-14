import React from 'react'
import Brewery from "./Brewery"

function BreweryList({ breweriesArray }) {

    const breweriesCompenents = breweriesArray.map(brewery => <Brewery breweriesObject={brewery} key={brewery.id}/>)

    return (
        <table className="ui celled striped padded table">
            <tbody>
            <tr>
                <th>
                    <h3 className="ui center aligned header">Name</h3>
                </th>
                <th>
                    <h3 className="ui center aligned header">Location</h3>
                </th>
                <th>
                    <h3 className="ui center aligned header">Phone #</h3>
                </th>
                <th>
                    <h3 className="ui center aligned header">Website</h3>
                </th>
            </tr>
            {breweriesCompenents}
            </tbody>
        </table>
    );
}

export default BreweryList;
