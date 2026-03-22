import React, { useState } from "react";

function Login({ onLogin, goToSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      /><br/>

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br/>

      <button onClick={() => onLogin(username, password)}>
        Login
      </button>

      <p>
        Don't have account?{" "}
        <button onClick={goToSignup}>Sign Up</button>
      </p>
    </div>
  );
}

export default Login;