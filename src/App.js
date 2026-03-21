import React, { useState } from "react";
import "./App.css";

function App() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    phone: "",
    location: "",
    birthDate: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    mobile: "",
    email: "",
  });

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [showForm, setShowForm] = useState("signup"); // "signup" or "login"

  // Handle SignUp input changes
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  // Handle Login input changes
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // SignUp submit
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setWelcomeMessage(
      `Welcome, ${signupData.firstName} ${signupData.middleName} ${signupData.lastName}!`
    );
  };

  // Login submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setWelcomeMessage(`Welcome, ${loginData.username}!`);
  };

  return (
    <div className="App">
      <h1>React Registration & Login Form</h1>

      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button
          onClick={() => setShowForm("signup")}
          className={showForm === "signup" ? "active" : ""}
        >
          Sign Up
        </button>
        <button
          onClick={() => setShowForm("login")}
          className={showForm === "login" ? "active" : ""}
        >
          Login
        </button>
      </div>

      {/* Sign Up Form */}
      {showForm === "signup" && (
        <form onSubmit={handleSignupSubmit}>
          <h2>Sign Up</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={signupData.firstName}
            onChange={handleSignupChange}
            required
          />
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={signupData.middleName}
            onChange={handleSignupChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={signupData.lastName}
            onChange={handleSignupChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={signupData.username}
            onChange={handleSignupChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={signupData.phone}
            onChange={handleSignupChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={signupData.location}
            onChange={handleSignupChange}
          />
          <input
            type="date"
            name="birthDate"
            value={signupData.birthDate}
            onChange={handleSignupChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleSignupChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      )}

      {/* Login Form */}
      {showForm === "login" && (
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleLoginChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={loginData.mobile}
            onChange={handleLoginChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          <button type="submit">Login</button>
        </form>
      )}

      {/* Welcome Message */}
      {welcomeMessage && <h2>{welcomeMessage}</h2>}
    </div>
  );
}

export default App;