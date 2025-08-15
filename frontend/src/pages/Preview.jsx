import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getForm } from '../services/api';
import PreviewForm from '../components/PreviewForm';

export default function Preview() {
  const { formId } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    async function fetchForm() {
      try {
        const { data } = await getForm(formId);
        setForm(data);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    }
    fetchForm();
  }, [formId]);

  if (!form) return <p className="text-center mt-6">Loading form...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <PreviewForm form={form} />
    </div>
  );
}