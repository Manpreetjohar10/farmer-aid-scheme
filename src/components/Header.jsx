import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(setUser);
        return () => unsub();
    }, []);

    const logout = async () => {
        await signOut(auth);
        window.location.href = "/login";
    };

    return (
        <>
            <div className="gov-header">
                🇮🇳 Farmer Government Aided Schemes Portal
            </div>

            <div className="gov-subheader">
                Ministry of Agriculture & Farmers Welfare, Government of India
            </div>

            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About Scheme</Link>
                {user && (
                    <button className="btn logout-btn" onClick={logout}>
                        Logout
                    </button>
                )}

                {!user && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}

            </div>
        </>
    );
}
