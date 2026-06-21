import "./../styles/dashboard.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ResumeAI Pro</div>

      <button className="upload-btn">
        <button
onClick={()=>{
document
.getElementById("upload")
.scrollIntoView({
behavior:"smooth"
});
}}
>
 Upload Resume
</button>
      </button>
    </nav>
  );
}