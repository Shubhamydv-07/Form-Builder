export default function PreviewForm({ form }) {
  return (
    <div>
      {form.headerImage && <img src={form.headerImage} alt="Header" className="w-full rounded mb-4 object-cover max-h-48" />}
      <h2 className="text-xl font-bold mb-3">{form.title || 'Untitled form'}</h2>

      <div className="space-y-4">
        {(form.questions || []).map((q, i) => (
          <div key={q.id||i} className="p-3 border rounded">
            <div className="font-medium mb-2">Q{i+1}. {q.text || '(no text)'}</div>
            {/* minimal rendering for each type */}
            {q.type === 'cloze' && <div className="text-sm text-gray-600">{q.config?.text || ''}</div>}
            {q.type === 'categorize' && (
              <div className="text-sm text-gray-600">
                Items: {(q.config?.items||'').split(',').map(s=>s.trim()).filter(Boolean).join(', ')}<br/>
                Categories: {(q.config?.categories||'').split(',').map(s=>s.trim()).filter(Boolean).join(', ')}
              </div>
            )}
            {q.type === 'comprehension' && (
              <>
                <div className="p-2 bg-gray-50 rounded mb-2">{q.config?.passage}</div>
                <ul className="list-decimal pl-5 text-sm text-gray-700">
                  {(q.config?.subQuestions||[]).map((sq,si)=> <li key={si}>{sq}</li>)}
                </ul>
              </>
            )}
            {!['cloze','categorize','comprehension'].includes(q.type) && <div className="text-sm text-gray-600">Default input</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
