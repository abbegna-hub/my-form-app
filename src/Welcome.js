import React from "react";

function Welcome({ user }) {
  return (
    <div>
      <h2>Welcome, {user.firstName} 🎉</h2>

      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Birthday:</strong> {user.birthday}</p>
    </div>
  );
}

export default Welcome;