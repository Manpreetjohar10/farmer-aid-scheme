import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function ApplyScheme() {
  const [farmerName, setFarmerName] = useState("");
  const [schemeName, setSchemeName] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "applications"), {
      farmerName,
      schemeName,
      status: "Pending",
      createdAt: new Date()
    });

    alert("Scheme Applied Successfully");
    setFarmerName("");
    setSchemeName("");
  };

  return (
    <div className="container">
      <div className="header">Apply for Scheme</div>

      <div className="card">
        <form onSubmit={submitForm}>
          <input
            className="action-btn"
            placeholder="Farmer Name"
            value={farmerName}
            onChange={(e) => setFarmerName(e.target.value)}
          />
          <br /><br />

          <input
            className="action-btn"
            placeholder="Scheme Name"
            value={schemeName}
            onChange={(e) => setSchemeName(e.target.value)}
          />
          <br /><br />

          <button className="action-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
