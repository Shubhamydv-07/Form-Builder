import { useState } from 'react';
import QuestionEditor from './QuestionEditor';
import HeaderImageUpload from './HeaderImageUpload';
import PreviewForm from './PreviewForm';
import { createForm } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function FormBuilder() {
  const [title, setTitle] = useState('');
  const [headerImage, setHeaderImage] = useState('');
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const addQuestion = (type) => {
    setQuestions(prev => [...prev, { id: Date.now().toString(), type, text: '', config: {} }]);
  };

  const updateQuestion = (idx, updated) => {
    setQuestions(prev => { const c = [...prev]; c[idx] = updated; return c; });
  };

  const removeQuestion = (idx) => setQuestions(prev => prev.filter((_,i)=>i!==idx));

  const saveForm = async () => {
    const payload = { title, headerImage, questions };
    const { data } = await createForm(payload);
    alert('Form created');
    navigate(`/preview/${data._id}`);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* EDITOR */}
      <div className="form-card">
        <div className="section-title">Build your form</div>
        <input className="input mb-3" placeholder="Form title" value={title} onChange={e=>setTitle(e.target.value)} />
        <HeaderImageUpload setHeaderImage={setHeaderImage} />
        <div className="mt-4 space-y-3">
          {questions.map((q, idx) =>
            <QuestionEditor key={q.id} q={q} idx={idx} updateQuestion={u=>updateQuestion(idx, u)} removeQuestion={()=>removeQuestion(idx)} />
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button className="btn" onClick={()=>addQuestion('categorize')}>Categorize</button>
          <button className="btn" onClick={()=>addQuestion('cloze')}>Cloze</button>
          <button className="btn" onClick={()=>addQuestion('comprehension')}>Comprehension</button>
        </div>

        <div className="mt-4">
          <button className="btn" onClick={saveForm}>Save & Preview</button>
        </div>
      </div>

      {/* LIVE PREVIEW */}
      <div className="form-card">
        <div className="section-title">Live preview</div>
        <PreviewForm form={{ title, headerImage, questions }} />
      </div>
    </div>
  );
}
