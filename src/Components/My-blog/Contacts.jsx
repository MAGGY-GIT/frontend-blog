import React, { useState } from 'react'; 
import { Link } from "react-router-dom";
import './Contacts.css';

function Contacts() {
  const initialValues = { firstname:"", secondname:"", emailaddress:"", message:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    // Check if there are any errors before setting isSubmit to true
    if (Object.keys(errors).length === 0) {
    setIsSubmit(true);
    } 
  };


  // Validation form values
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname){
      errors.firstname = "First name is required!";
    }

    if (!values.secondname){
      errors.secondname = "Second name is required!";
    }

    if (!values.emailaddress){
      errors.emailaddress = "Email address is required!";
    } else if (!regex.test(values.emailaddress)){
      errors.emailaddress = "This is not a valid email!";
    }

    if (!values.message){
      errors.message = "Message is required!";
    }

    return errors;
  };

  return (
    <div className='container'>
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <div className='ui message success'>
          Message sent successfully!
        </div>
      )}

      {!isSubmit && (
        <form action="" onSubmit={handleSubmit}>
          <div className='header2'>
            <div className='text'>Contact Page</div>
            <div className='underline'></div>
          </div>

          <div className='inputs'>
            <div className="input">
              <input
                type="text"
                name="firstname"
                placeholder='First name'
                value={formValues.firstname}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.firstname}</p>

            <div className="input">
              <input
                type="text"
                name="secondname"
                placeholder='Second name'
                value={formValues.secondname}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.secondname}</p>

            <div className="input">
              <input
                type="email"
                name="emailaddress"
                placeholder='Email address'
                value={formValues.emailaddress}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.emailaddress}</p>

            <div className="text2">
              <textarea
                name="message"
                placeholder='Message'
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <p>{formErrors.message}</p>
          </div>

          <div className="submit-container">
            <button className="submit">
              Send message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contacts;