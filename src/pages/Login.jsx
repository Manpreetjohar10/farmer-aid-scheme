import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);

            if (email.includes("admin")) {
                navigate("/admin");
            } else {
                navigate("/farmer");
            }
        } catch (error) {
            alert("Login failed: " + error.message);
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="page-title">Login</div>

            <div className="card">
                <input
                    className="action-btn"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    className="action-btn"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button className="btn" onClick={login}>
                    Login
                </button>
                <p style={{ marginTop: "15px" }}>
                    New User? <a href="/register">Register here</a>
                </p>
                <p>
                    <a href="/forgot-password">Forgot Password?</a>
                </p>

            </div>
        </div>
    );
}
