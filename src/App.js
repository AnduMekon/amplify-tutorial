import React, { useState } from 'react';
import './App.css';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  // Basic validation functions
  const validateName = (name) => name.trim() !== '';
  const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile); // Validates 10-digit mobile number
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email regex

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset errors for the field being typed
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateName(formData.name) ? '' : 'Name is required.',
      mobile: validateMobile(formData.mobile) ? '' : 'Please enter a valid 10-digit mobile number.',
      email: validateEmail(formData.email) ? '' : 'Please enter a valid email address.',
    };

    setErrors(newErrors);

    // Only submit if there are no errors
    if (!newErrors.name && !newErrors.mobile && !newErrors.email) {
      console.log('Form Submitted:', formData);
      alert('Form submitted successfully!');
    } else {
      console.log('Validation errors:', newErrors);
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <h3>We are currently working on this site. Please enter 
        the information for our site experiment.Thank you!</h3>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
