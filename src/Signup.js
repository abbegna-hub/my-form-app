import React, { useState } from "react";

function Signup({ onSignup, goToLogin }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    location: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    onSignup(form);
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <input name="firstName" placeholder="First Name" onChange={handleChange} /><br/>
      <input name="lastName" placeholder="Last Name" onChange={handleChange} /><br/>
      <input name="username" placeholder="Username" onChange={handleChange} /><br/>
      <input name="phone" placeholder="Phone Number" onChange={handleChange} /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input name="location" placeholder="Location" onChange={handleChange} /><br/>
      <input type="date" name="birthday" onChange={handleChange} /><br/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br/>
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} /><br/>

      <button onClick={handleSubmit}>Register</button>

      <p>
        Already have account?{" "}
        <button onClick={goToLogin}>Login</button>
      </p>
    </div>
  );
}

export default Signup;