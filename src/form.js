import React, { useState } from 'react';
import './form.css'; // We'll create this file for styling

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    mobile: false,
    password: false
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[789]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
    validateField(id, value);
  };

  const validateField = (id, value) => {
    switch (id) {
      case 'email':
        setErrors((prev) => ({ ...prev, email: !validateEmail(value) }));
        break;
      case 'mobile':
        setErrors((prev) => ({ ...prev, mobile: !validateMobile(value) }));
        break;
      case 'password':
        setErrors((prev) => ({ ...prev, password: !validatePassword(value) }));
        break;
      case 'firstName':
      case 'lastName':
        setErrors((prev) => ({ ...prev, [id]: value.trim() === '' }));
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      validateEmail(formValues.email) &&
      validateMobile(formValues.mobile) &&
      validatePassword(formValues.password) &&
      formValues.firstName.trim() !== '' &&
      formValues.lastName.trim() !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form submitted successfully:', formValues);
    } else {
      console.error('Form validation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          className={errors.firstName ? 'error' : ''}
          required
        />
        {errors.firstName && <span className="error-message">First name is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          className={errors.lastName ? 'error' : ''}
          required
        />
        {errors.lastName && <span className="error-message">Last name is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          required
        />
        {errors.email && <span className="error-message">Invalid email format</span>}
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          value={formValues.mobile}
          onChange={handleChange}
          className={errors.mobile ? 'error' : ''}
          required
        />
        {errors.mobile && <span className="error-message">Mobile number must start with 7, 8, or 9 and be 10 digits long</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={formValues.password}
          onChange={handleChange}
          className={errors.password ? 'error' : ''}
          required
        />
        {errors.password && <span className="error-message">Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character</span>}
      </div>

      <button type="submit" disabled={!isFormValid()}>Submit</button>
    </form>
  );
};

export default Form;


//import React, { useState } from 'react';
//import './Form.css';
//
//const Form = () => {
//  const [formValues, setFormValues] = useState({
//    firstName: '',
//    lastName: '',
//    email: '',
//    mobile: '',
//    password: ''
//  });
//
//  const [errors, setErrors] = useState({
//    firstName: false,
//    lastName: false,
//    email: false,
//    mobile: false,
//    password: false
//  });
//
//  const validateEmail = (email) => {
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    return emailRegex.test(email);
//  };
//
//  const validateMobile = (mobile) => {
//    const mobileRegex = /^[789]\d{9}$/;
//    return mobileRegex.test(mobile);
//  };
//
//  const validatePassword = (password) => {
//    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//    return passwordRegex.test(password);
//  };
//
//  const handleChange = (e) => {
//    const { id, value } = e.target;
//    setFormValues((prev) => ({ ...prev, [id]: value }));
//    validateField(id, value);
//  };
//
//  const validateField = (id, value) => {
//    switch (id) {
//      case 'email':
//        setErrors((prev) => ({ ...prev, email: !validateEmail(value) }));
//        break;
//      case 'mobile':
//        setErrors((prev) => ({ ...prev, mobile: !validateMobile(value) }));
//        break;
//      case 'password':
//        setErrors((prev) => ({ ...prev, password: !validatePassword(value) }));
//        break;
//      case 'firstName':
//      case 'lastName':
//        setErrors((prev) => ({ ...prev, [id]: value.trim() === '' }));
//        break;
//      default:
//        break;
//    }
//  };
//
//  const isFormValid = () => {
//    return (
//      validateEmail(formValues.email) &&
//      validateMobile(formValues.mobile) &&
//      validatePassword(formValues.password) &&
//      formValues.firstName.trim() !== '' &&
//      formValues.lastName.trim() !== ''
//    );
//  };
//
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    if (isFormValid()) {
//      console.log('Form submitted successfully:', formValues);
//    } else {
//      console.error('Form validation failed');
//    }
//  };
//
//  return (
//    <form onSubmit={handleSubmit} className="form">
//      <div className="form-group">
//        <label htmlFor="firstName">First Name:</label>
//        <input
//          type="text"
//          id="firstName"
//          value={formValues.firstName}
//          onChange={handleChange}
//          className={errors.firstName ? 'error' : ''}
//          required
//        />
//        {errors.firstName && <span className="error-message">First name is required</span>}
//      </div>
//
//      <div className="form-group">
//        <label htmlFor="lastName">Last Name:</label>
//        <input
//          type="text"
//          id="lastName"
//          value={formValues.lastName}
//          onChange={handleChange}
//          className={errors.lastName ? 'error' : ''}
//          required
//        />
//        {errors.lastName && <span className="error-message">Last name is required</span>}
//      </div>
//
//      <div className="form-group">
//        <label htmlFor="email">Email:</label>
//        <input
//          type="email"
//          id="email"
//          value={formValues.email}
//          onChange={handleChange}
//          className={errors.email ? 'error' : ''}
//          required
//        />
//        {errors.email && <span className="error-message">Invalid email format</span>}
//      </div>
//
//      <div className="form-group">
//        <label htmlFor="mobile">Mobile Number:</label>
//        <input
//          type="tel"
//          id="mobile"
//          value={formValues.mobile}
//          onChange={handleChange}
//          className={errors.mobile ? 'error' : ''}
//          required
//        />
//        {errors.mobile && <span className="error-message">Mobile number must start with 7, 8, or 9 and be 10 digits long</span>}
//      </div>
//
//      <div className="form-group">
//        <label htmlFor="password">Password:</label>
//        <input
//          type="password"
//          id="password"
//          value={formValues.password}
//          onChange={handleChange}
//          className={errors.password ? 'error' : ''}
//          required
//        />
//        {errors.password && <span className="error-message">Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character</span>}
//      </div>
//
//      <button type="submit" disabled={!isFormValid()}>Submit</button>
//    </form>
//  );
//};
//
//export default Form;
