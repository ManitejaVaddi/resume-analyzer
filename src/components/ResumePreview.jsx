export default function ResumePreview({ fileName }) {
  return (
    <div className="card">
      <h3>Resume Preview</h3>

      <div className="preview-box">
        <p>📄 {fileName}</p>
        <p>Resume uploaded successfully</p>
      </div>
    </div>
  );
}