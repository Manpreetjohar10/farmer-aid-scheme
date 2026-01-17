import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

<Link to="/post-scheme" className="info-card link-card">
    <h3>Post New Scheme</h3>
    <p>Add government schemes for farmers.</p>
</Link>


export default function AdminDashboard() {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const fetchApps = async () => {
            const snap = await getDocs(collection(db, "applications"));
            setApps(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        };
        fetchApps();
    }, []);

    const updateStatus = async (id, status) => {
        await updateDoc(doc(db, "applications", id), { status });
        alert(`Application ${status}`);
    };

    return (

        <div className="container">
            <div className="page-title">Admin Dashboard</div>
            <div className="grid">

                <div className="info-card">
                    <h3>Total Applications</h3>
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                        {apps.length}
                    </p>
                </div>

                <div className="info-card">
                    <h3>Scheme Management</h3>

                    <div className="action-row">
                        <a href="/post-scheme">
                            <button className="btn">Post New Scheme</button>
                        </a>

                        <a href="/view-schemes">
                            <button className="btn">View Schemes</button>
                        </a>
                    </div>
                </div>

            </div>


            {apps.length === 0 && (
                <div className="card">
                    <p>No applications found.</p>
                </div>
            )}

            {apps.map(app => (
                <div className="card" key={app.id}>
                    <h3>{app.schemeName}</h3>

                    <p>
                        <strong>Farmer:</strong> {app.farmerName}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        <span className={`status ${app.status?.toLowerCase()}`}>
                            {app.status}
                        </span>
                    </p>

                    <div className="action-row">
                        <button
                            className="btn"
                            disabled={app.status === "Approved"}
                            onClick={() => updateStatus(app.id, "Approved")}
                        >
                            Approve
                        </button>


                        <button
                            className="btn danger"
                            onClick={() => updateStatus(app.id, "Rejected")}
                        >
                            Reject
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
