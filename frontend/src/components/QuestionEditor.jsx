export default function QuestionEditor({ q, idx, updateQuestion, removeQuestion }) {
  const onChange = (field, val) => updateQuestion({ ...q, [field]: val });
  const onConfigChange = (field, val) =>
    onChange("config", { ...(q.config || {}), [field]: val });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onConfigChange("image", {
        file, // Keep file for backend upload
        preview: URL.createObjectURL(file) // Instant preview
      });
    }
  };

  return (
    <div className="border rounded p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="font-medium">
          Q{idx + 1} — {q.type}
        </div>
        <button onClick={removeQuestion} className="ml-auto text-sm text-red-600">
          Remove
        </button>
      </div>

      {/* Question text */}
      <input
        className="input mb-2"
        placeholder="Question text"
        value={q.text}
        onChange={(e) => onChange("text", e.target.value)}
      />

      {/* Image Upload Field */}
      <div className="mb-3">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {q.config?.image?.preview && (
          <img
            src={q.config.image.preview}
            alt="Preview"
            className="mt-2 w-32 h-32 object-cover border"
          />
        )}
      </div>

      {q.type === "categorize" && (
        <>
          <input
            className="input mb-2"
            placeholder="Comma-separated items"
            value={q.config?.items || ""}
            onChange={(e) => onConfigChange("items", e.target.value)}
          />
          <input
            className="input"
            placeholder="Comma-separated categories"
            value={q.config?.categories || ""}
            onChange={(e) => onConfigChange("categories", e.target.value)}
          />
        </>
      )}

      {q.type === "cloze" && (
        <textarea
          className="input h-24"
          placeholder="Text with blanks like {{1}} {{2}}"
          value={q.config?.text || ""}
          onChange={(e) => onConfigChange("text", e.target.value)}
        />
      )}

      {q.type === "comprehension" && (
        <>
          <textarea
            className="input h-24 mb-2"
            placeholder="Passage"
            value={q.config?.passage || ""}
            onChange={(e) => onConfigChange("passage", e.target.value)}
          />
          <textarea
            className="input h-20"
            placeholder="Sub-questions (one per line)"
            value={(q.config?.subQuestions || []).join("\n")}
            onChange={(e) =>
              onConfigChange("subQuestions", e.target.value.split("\n"))
            }
          />
        </>
      )}
    </div>
  );
}
