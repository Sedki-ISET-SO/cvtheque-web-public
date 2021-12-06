import "./App.css";
import Files from "./components/Files";
import { Worker } from "@react-pdf-viewer/core";

function App() {
  return (
    <div>
      <div className="pageContainer">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
        <Files />
      </div>
    </div>
  );
}

export default App;
