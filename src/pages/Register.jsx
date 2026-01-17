import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const register = async () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }
        if (!auth.currentUser.emailVerified) {
            alert("Please verify your email first");
            return;
        }


        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(auth.currentUser);
            alert("Verification email sent. Please verify before login.");
            alert("Registration successful");
            navigate("/login");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="container">
            <div className="page-title">Register New Farmer</div>

            <div className="card">
                <input
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button className="btn" onClick={register}>
                    Register
                </button>
            </div>
        </div>
    );
}
