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
    password: "",
  });

  const [users, setUsers] = useState([]); // multiple users

  const [currentPage, setCurrentPage] = useState("login");
  const [message, setMessage] = useState("");

  // Handle input
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // SIGN UP
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Check username exists
    const userExists = users.find(
      (user) => user.username === signupData.username
    );

    if (userExists) {
      alert("Username already exists!");
      return;
    }

    // Add new user
    setUsers([...users, signupData]);

    setMessage("Registration successful! Please login.");
    setCurrentPage("login");

    // Clear form
    setSignupData({
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      phone: "",
      location: "",
      birthDate: "",
      password: "",
    });
  };

  // LOGIN
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === loginData.username
    );

    if (!user) {
      alert("User not found! Please sign up.");
      return;
    }

    if (user.password !== loginData.password) {
      alert("Incorrect password!");
      return;
    }

    // Show full name in welcome
    setMessage(
      `Welcome, ${user.firstName} ${user.middleName} ${user.lastName}!`
    );

    setCurrentPage("welcome");

    // Clear login
    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="App">
      <h1>React Login System</h1>

      {/* LOGIN PAGE */}
      {currentPage === "login" && (
        <div>
          <h2>Login</h2>

          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleLoginChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />

            <button type="submit">Login</button>
          </form>

          <p style={{ color: "green" }}>{message}</p>

          <p>
            Don't have account?{" "}
            <button onClick={() => setCurrentPage("signup")}>
              Sign Up
            </button>
          </p>
        </div>
      )}

      {/* SIGNUP PAGE */}
      {currentPage === "signup" && (
        <div>
          <h2>Sign Up</h2>

          <form onSubmit={handleSignupSubmit}>
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

            <button type="submit">Register</button>
          </form>

          <p>
            Already registered?{" "}
            <button onClick={() => setCurrentPage("login")}>
              Login
            </button>
          </p>
        </div>
      )}

      {/* WELCOME PAGE */}
      {currentPage === "welcome" && (
        <div>
          <h2>{message}</h2>

          <button onClick={() => setCurrentPage("login")}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;