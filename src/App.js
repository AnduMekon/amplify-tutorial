import logo from './logo.svg';

import React, { useState } from "react";
import './App.css';
console.log('it is running ')
function App() {
 // Initialize state for form data
 const [formData, setFormData] = useState({
  name: "",
  email: "",
});

// Handle input change
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value, // Update the specific field being typed into
  });
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // You can perform any action with formData here (e.g., send to API)
  console.log("Form data submitted:", formData);
};

return (
  <form onSubmit={handleSubmit}>
     <div>
      
      <label color='red'>
       <h3>We are currently working on this site. Please enter 
        the information for our site experiment.Thank you!</h3>
      </label> 
    </div>
    <div>
       
       <img src={logo} className="App-logo" alt="logo" />
     
      <label>
        Last Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
    </div>
    <div>
      
      <label>
        First Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
    </div>
    <div>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
    </div>
    <button type="submit">Submit</button>
  </form>
);
}

export default App;
