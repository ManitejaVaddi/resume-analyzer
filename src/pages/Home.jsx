import { useState } from "react";
import { extractPDFText } from "../utils/pdfExtractor";
import { calculateATS } from "../utils/atsScorer";
import { getSuggestions } from "../utils/getSuggestions";
import { analyzeResume } from "../utils/aiAnalyzer";
import { getMissingSkills }from "../utils/getMissingSkills";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { calculateMatch }
from "../utils/jobMatcher";

import "./Home.css";

export default function Home() {

  const [score, setScore] = useState(null);
  
  const [missingSkills,setMissingSkills] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [company, setCompany] = useState("");
const [jobTitle, setJobTitle] = useState("");
const [jobDescription, setJobDescription] = useState("");
const [matchScore, setMatchScore] =
  useState(0);

  const handleUpload = async (e) => {
const file = e.target.files[0];

if (!file) return;

setFileName(file.name);

    try {

      setLoading(true);

      const text = await extractPDFText(file);
      console.log("PDF TEXT:", text);
      const match =
calculateMatch(
  text,
  jobDescription
);

setMatchScore(match);

      const ats = calculateATS(text);
      const suggestionsList = getSuggestions(text);

      console.log("ATS SCORE:", ats);
      console.log("SUGGESTIONS:", suggestionsList); 

      setScore(ats);
      setSuggestions(suggestionsList);
      const missing =
getMissingSkills(
  text,
  jobDescription
);

setMissingSkills(missing);

      const aiResult = await analyzeResume(text);

      setAiResponse(aiResult);

    } catch (error) {

      console.error("Upload Error:", error);

      setAiResponse(
        "AI Analysis could not be generated. Please check your Gemini API Key."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <Hero />

       <div id="upload" className="upload-card">

  <input
    type="text"
    placeholder="Company Name"
    value={company}
    onChange={(e) =>
      setCompany(e.target.value)
    }
    className="job-input"
  />

  <input
    type="text"
    placeholder="Job Title"
    value={jobTitle}
    onChange={(e) =>
      setJobTitle(e.target.value)
    }
    className="job-input"
  />

  <textarea
    placeholder="Paste Job Description Here..."
    value={jobDescription}
    onChange={(e) =>
      setJobDescription(e.target.value)
    }
    className="job-textarea"
  />

  <input
    type="file"
    accept=".pdf"
    onChange={handleUpload}
    className="file-input"
  />

</div>

        {score !== null && (

          <div className="result-grid">
            <div className="card">

  {/* <h3>
    Missing Skills
  </h3>

  <ul>
    {missingSkills.map(
      (skill,index) => (
        <li key={index}>
          {skill}
        </li>
      )
    )}
  </ul> */}

</div>
<div className="card">
  <h3>Job Match</h3>

  <div className="score-number">
    {matchScore}%
  </div>
</div>

<div className="card">

  <h3>Missing Skills</h3>

  <ul>

    {missingSkills.length > 0 ? (

      missingSkills.map(
        (skill,index)=>(
          <li key={index}>
            {skill}
          </li>
        )
      )

    ) : (

      <p>
        Add Job Description
      </p>

    )}

  </ul>

</div>

            <div className="card">

              <h3>ATS Score</h3>

              <div className="score-number">
                {score}
              </div>

            </div>

            <div className="card">

              <h3>Suggestions</h3>

              <ul>
                {suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

            </div>

            <div className="card">

              <h3>Resume Status</h3>

             <p>
  {score >= 80
    ? "Excellent Resume"
    : score >= 60
    ? "Good Resume"
    : score >= 40
    ? "Average Resume"
    : "Needs Improvement"}
</p>

            </div>

          </div>

        )}

        {loading && (

          <div
            className="card"
            style={{ marginTop: "20px" }}
          >
            <h3>Analyzing Resume...</h3>
          </div>

        )}

        {!loading && aiResponse && (

          <div
            className="card"
            style={{ marginTop: "20px" }}
          >

            <h2>AI Analysis</h2>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                marginTop: "15px",
              }}
            >
              {aiResponse}
            </pre>

          </div>

        )}

        <Footer />

      </div>
    </>
  );
}