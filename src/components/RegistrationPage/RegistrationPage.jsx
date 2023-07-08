import React, { useState } from 'react';

import './RegistrationPage.css';

function RegistrationPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [radioOption, setRadioOption] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleLicenseNumberChange = (e) => {
    setLicenseNumber(e.target.value);
  };

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleRadioChange = (e) => {
    setRadioOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here with the form data
    console.log('Registration form submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('License Number:', licenseNumber);
    console.log('Selected File:', selectedFile);
    console.log('Radio Option:', radioOption);
    // Reset the form fields
    setFirstName('');
    setLastName('');
    setAge('');
    setGender('');
    setLicenseNumber('');
    setSelectedFile(null);
    setRadioOption('');
  };

  return (
    <div className="form-section">
      <div className="container-container-1">
        <div className="login-logo">
          <h1>Registration Page</h1>
        </div>
        <div className="form-container-2">
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input type="text" value={firstName} onChange={handleFirstNameChange} />
            </label>
            <br />
            <label>
              Last Name:
              <input type="text" value={lastName} onChange={handleLastNameChange} />
            </label>
            <br />
            <label>
              Age:
              <input type="number" value={age} onChange={handleAgeChange} />
            </label>
            <br />
            <label>
              Gender:
              <select value={gender} onChange={handleGenderChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <label>
              License Number:
              <input type="text" value={licenseNumber} onChange={handleLicenseNumberChange} />
            </label>
            <br />
            <label>
              Upload PDF:
              <input type="file" onChange={handleFileUpload} />
            </label>
            <br />
            <label>
              Radio Select:
              <input type="radio" value="option1" checked={radioOption === 'option1'} onChange={handleRadioChange} />
              Option 1
              <input type="radio" value="option2" checked={radioOption === 'option2'} onChange={handleRadioChange} />
              Option 2
            </label>
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
