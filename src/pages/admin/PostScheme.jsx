import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function PostScheme() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitScheme = async () => {
    if (!name || !description) {
      alert("Please fill all fields");
      return;
    }

    await addDoc(collection(db, "schemes"), {
      name,
      description,
      createdAt: new Date()
    });

    alert("Scheme added successfully");
    setName("");
    setDescription("");
  };

  return (
    <div className="container">
      <div className="page-title">Post Government Scheme</div>

      <div className="card">
        <input
          placeholder="Scheme Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Scheme Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button className="btn" onClick={submitScheme}>
          Add Scheme
        </button>
      </div>
    </div>
  );
}
