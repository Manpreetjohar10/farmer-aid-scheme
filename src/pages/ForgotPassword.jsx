import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const resetPassword = async () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <div className="page-title">Forgot Password</div>

      <div className="card">
        <input
          placeholder="Enter registered email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button className="btn" onClick={resetPassword}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
