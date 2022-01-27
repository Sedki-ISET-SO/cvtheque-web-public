import "./App.css";
import Files from "./components/Files";
import { Worker } from "@react-pdf-viewer/core";
import { Link } from "react-router-dom";
import Generate from "./routes/Generate";
import Forms from "./routes/Forms";

function App() {
  return (
    <div>
      <div className="pageContainer">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="generate">Generate</Link> | <Link to="cvs">CVS</Link> |{" "}
          <Link to="/">Home</Link>
          <button
            onClick={() => {
              localStorage.removeItem("realtoken");
            }}
          >
            <Link to="/login">logout</Link>
          </button>
        </nav>
        <Files />
      </div>
    </div>
  );
}

export default App;
