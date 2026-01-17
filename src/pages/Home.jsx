import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">

      <div className="hero">
        <h1>Farmer Government Aided Schemes Portal</h1>
        <p>Official digital platform for farmer welfare schemes</p>
      </div>

      {/* CLICKABLE SERVICE TILES */}
      <div className="grid">

        <Link to="/view-schemes" className="info-card link-card">
          <h3>🌾 View Schemes</h3>
          <p>Browse available government schemes.</p>
        </Link>

        <Link to="/apply-scheme" className="info-card link-card">
          <h3>📄 Apply for Scheme</h3>
          <p>Submit applications online.</p>
        </Link>

        <Link to="/status" className="info-card link-card">
          <h3>📊 Application Status</h3>
          <p>Track your application status.</p>
        </Link>

      </div>

    </div>
  );
}
