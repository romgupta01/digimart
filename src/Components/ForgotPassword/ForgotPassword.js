import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const auth = getAuth();

  const handleResetPassword = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 class="heading">Forgot Password?</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px" }}
      />
      <br />
      <button class="button" onClick={handleResetPassword} style={{ padding: "8px 15px" }}>
        Reset Password
      </button>
      <p class="message">{message}</p>
    </div>
  );
};

export default ForgotPassword;
