import logo from "./logo.svg";
import "./App.css";
import UploadImage from "./components/upload";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <h3>Axios</h3>
      <UploadImage />
    </div>
  );
}

export default App;
