import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import ApplyScheme from "./pages/farmer/ApplyScheme";
import ApplicationStatus from "./pages/farmer/ApplicationStatus";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostScheme from "./pages/admin/PostScheme";
import ViewSchemes from "./pages/farmer/ViewSchemes";
import AuthGuard from "./utils/AuthGuard";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/farmer" element={
                    <AuthGuard><FarmerDashboard /></AuthGuard>
                } />

                <Route path="/apply-scheme" element={
                    <AuthGuard><ApplyScheme /></AuthGuard>
                } />

                <Route path="/status" element={
                    <AuthGuard><ApplicationStatus /></AuthGuard>
                } />

                <Route path="/admin" element={
                    <AuthGuard><AdminDashboard /></AuthGuard>
                } />

                <Route
                    path="/post-scheme"
                    element={
                        <AuthGuard>
                            <PostScheme />
                        </AuthGuard>
                    }
                />


                <Route path="/view-schemes" element={
                    <AuthGuard><ViewSchemes /></AuthGuard>
                } />
            </Routes>
        </BrowserRouter>
    );
}
