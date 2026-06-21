import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreCard({ score }) {

  return (

    <div className="card">

      <h3>ATS Score</h3>

      <div className="progress-container">

        <CircularProgressbar
          value={score}
          text={`${score}%`}
        />

      </div>

    </div>
  );
}