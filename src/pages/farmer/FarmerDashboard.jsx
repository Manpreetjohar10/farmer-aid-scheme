import { Link } from "react-router-dom";

export default function FarmerDashboard() {
  return (
    <div className="container">

      <div className="grid">

        <Link to="/apply-scheme" className="info-card link-card">
          <h3>Apply for Scheme</h3>
          <p>Submit new scheme applications.</p>
        </Link>

        <Link to="/status" className="info-card link-card">
          <h3>Application Status</h3>
          <p>Check approval or rejection.</p>
        </Link>

        <Link to="/view-schemes" className="info-card link-card">
          <h3>View Schemes</h3>
          <p>Explore government schemes.</p>
        </Link>

      </div>

    </div>
  );
}
