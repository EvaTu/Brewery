import React, { useState } from 'react'

function BreweryForm() {
    const [ formData , setFormData ] = useState({
        image: "",
        name: "",
        street: "",
        city: "",
        state: "",
        postal_code: "",
        phone: "",
        website: "",
        details: "",
    })

    function manageFormData(e) {
        let targetName = e.target.name
        let targetValue = e.target.value
        setFormData({...formData, [targetName]: targetValue})
    }

    return (
        <div className="new-brewery-form">
            <form>
                <input 
                    type="text"
                    name="name"
                    placeholder="Brewery Name"
                    value={formData.name}
                    onChange={manageFormData}
                />
                <input 
                    type="text"
                    name="image"
                    placeholder="Image"
                    value={formData.image}
                    onChange={manageFormData}
                />
                <input 
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={formData.street}
                    onChange={manageFormData}
                />
                <input 
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={manageFormData}
                />
                <input 
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={manageFormData}
                />
                <input 
                    type="number"
                    name="postal_code"
                    placeholder="Postal Code"
                    value={formData.postal_code}
                    onChange={manageFormData}
                />
                <input 
                    type="text"
                    name="phone"
                    placeholder="Phone #"
                    value={formData.phone}
                    onChange={manageFormData}
                />
                <input 
                    type="text"
                    name="website"
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={manageFormData}
                />
                <input 
                    type="text"
                    name="details"
                    placeholder="Details"
                    value={formData.details}
                    onChange={manageFormData}
                />
            </form>
        </div>
    )
}

export default BreweryForm
