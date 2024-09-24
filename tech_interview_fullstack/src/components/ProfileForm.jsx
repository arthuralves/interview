import React, { useState } from 'react';

export const ProfileForm = ({ setProfileId }) => {
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
        age: '',
        waist: '',
        profileId: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
      }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const result = await response.json();
                setFormData({
                    ...result.newProfile,
                    profileId: result.newProfile.id
                });
                console.log('Profile submitted!');
            } else {
                console.error('Failed to submit profile');
            }
        } catch (error) {
            console.error('Error:', error);
        }
      }

    const loadProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/profile?profileId=${formData.profileId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const profileData = await response.json();
                setFormData({
                    ...profileData,
                    profileId: profileData.id
                });
                
                setProfileId(profileData.id);                
                console.log('Profile loaded!');
            } else {
                console.error('Failed to load profile');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                        value={formData.height || ''}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight || ''}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age || ''}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="waist">Waist:</label>
                    <input
                        type="number"
                        id="waist"
                        name="waist"
                        value={formData.waist || ''}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save Profile</button>
            </form>
            <br/>
           
            <div>
                <label htmlFor="profileId">Profile Id:</label>
                <input
                    type="text"
                    id="profileId"
                    name="profileId"
                    value={formData.profileId || ''}
                    onChange={handleChange}
                />
            </div>            
            <button type="button" onClick={loadProfile}>Load Profile</button>
        </div>
    );
}
export default ProfileForm;