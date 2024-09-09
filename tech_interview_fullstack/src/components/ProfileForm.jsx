import React from "react";

export const ProfileForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Profile submitted!')
        // Here you can add logic to handle the form submission
      }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                    />
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                    />
                </div>
                <div>
                    <label htmlFor="waist">Waist:</label>
                    <input
                        type="number"
                        id="waist"
                        name="waist"
                    />
                </div>
                <button type="submit">Save Profile</button>
            </form>
            <br/>
            <button type="button">Load Profile</button>
        </div>

    )
}