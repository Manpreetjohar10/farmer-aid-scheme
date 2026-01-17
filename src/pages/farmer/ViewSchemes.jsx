import { useEffect, useState } from "react";
import { db, auth } from "../../firebase/config";
import {collection,addDoc,getDocs,query,where} from "firebase/firestore";


export default function ViewSchemes() {
    const [search, setSearch] = useState("");
    const [schemes, setSchemes] = useState([]);

    useEffect(() => {
        const fetchSchemes = async () => {
            const snap = await getDocs(collection(db, "schemes"));
            setSchemes(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        };
        fetchSchemes();
    }, []);
    const applyScheme = async (scheme) => {
        const q = query(
            collection(db, "applications"),
            where("schemeName", "==", scheme.name),
            where("farmerName", "==", auth.currentUser.email.split("@")[0])
        );

        const existing = await getDocs(q);

        if (!existing.empty) {
            alert("You have already applied for this scheme");
            return;
        }

        await addDoc(collection(db, "applications"), {
            schemeName: scheme.name,
            farmerName: auth.currentUser.email.split("@")[0],
            status: "Pending",
            appliedAt: new Date()
        });

        alert("Application submitted successfully");
    };

    return (
        <div className="container">
            <div className="page-title">Government Schemes</div>
            <input
                className="search-input"
                placeholder="Search scheme by name"
                onChange={(e) => setSearch(e.target.value)}
            />

            {schemes
                .filter(s =>
                    s.name.toLowerCase().includes(search.toLowerCase())
                )
                .map(s => (
                    <div className="card" key={s.id}>
                        <h3>{s.name}</h3>
                        <p>{s.description}</p>
                        <p><b>Eligibility:</b> {s.eligibility}</p>

                        <button className="btn" onClick={() => applyScheme(s)}>
                            Apply
                        </button>
                    </div>
                ))}

        </div>
    );
}
