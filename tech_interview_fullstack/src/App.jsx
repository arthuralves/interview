import React, { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import ProductDropdown from './components/ProductDropdown';

const App = () => {
  const [profileId, setProfileId] = useState('');
  const [recommendation, setRecommendation] = useState('');

  return (
    <div>
      <ProfileForm setProfileId={setProfileId} />
      <ProductDropdown 
        profileId={profileId} 
        setRecommendation={setRecommendation} 
      />
      {recommendation && (
        <p>My recommended size for {recommendation.productName} is: {recommendation.size}</p>
      )}
    </div>
  );
};

export default App;