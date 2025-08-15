// src/pages/PreviewList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PreviewList() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/forms")
      .then(res => {
        setForms(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading forms...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Available Forms</h1>
      {forms.length === 0 ? (
        <p>No forms available.</p>
      ) : (
        <ul className="space-y-3">
          {forms.map(form => (
            <li key={form._id} className="border p-3 rounded shadow-sm">
              <h2 className="text-lg font-semibold">{form.title}</h2>
              <Link
                to={`/preview/${form._id}`}
                className="text-indigo-600 hover:underline"
              >
                Preview Form
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
