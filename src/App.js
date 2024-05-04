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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Catagories = [
    { type: "email", errorMsg: "Email is must" },
    { type: "age", errorMsg: "Age is required" },
    { type: "phone", errorMsg: "Phone number is required" },
    { type: "gender", errorMsg: "Gender is required" },
  ];

  const GenuineForm = () => {
    let isValid = true;
    const errors = {};

    Catagories.forEach(({ type, errorMsg }) => {
      if (!formData[type]) {
        errors[type] = errorMsg;
        isValid = false;
      }
    });

    if (!formData.username) {
      errors.username = "Username is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  //submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (GenuineForm()) {
      setIsSubmitted(true);
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
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <p>Your Form is submitted Successfully</p>
      ) : (
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
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
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
      )}
    </div>
  );
};

export default UserRegistrationForm;
