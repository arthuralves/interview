import React from 'react';
import './App.css'
import { ProfileForm } from './components/ProfileForm';
import ProductDropdown from './components/ProductDropdown';

function App() {

  return (
    <>
      <ProfileForm />
      <hr />
      <ProductDropdown />
      <br />
      My recommended size for `PRODUCT_NAME` is:
    </>
  )
}

export default App
