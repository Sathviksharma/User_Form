import { useState } from "react";

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    phoneNumber: "",
    gender: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    age: "",
    phone: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;
    //for username  this like to create  for username
    if (!formData.username) {
      errors.username = "username is must"; //this is description to display
      isValid = false;
    }

    //for email
    if (!formData.email) {
      errors.email = "Email is must";
      isValid = false;
    }

    //for age

    if (!formData.age) {
      errors.age = "Age is required";
      isValid = false;
    }

    //phone
    if (!formData.phone) {
      errors.phone = "phone number is required";
      isValid = false;
    }

    //gender

    if (!formData.gender) {
      errors.gender = "gender is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  //submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  //reset

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      age: "",
      phone: "",
      gender: "",
    });
    setFormErrors({
      username: "",
      email: "",
      age: "",
      phone: "",
      gender: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {formErrors.username && <span>{formErrors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <span>{formErrors.email}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {formErrors.age && <span>{formErrors.age}</span>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength={10}
        />
        {formErrors.phone && <span>{formErrors.phone}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {formErrors.gender && <span>{formErrors.gender}</span>}
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
};

export default UserRegistrationForm;
