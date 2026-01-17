import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function ApplicationStatus() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "applications"));
      setApps(snap.docs.map(d => d.data()));
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h3>Application Status</h3>

        <table>
          <thead>
            <tr>
              <th>Farmer</th>
              <th>Scheme</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((a, i) => (
              <tr key={i}>
                <td>{a.farmerName}</td>
                <td>{a.schemeName}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
