import logo from "./logo.svg";
import "./App.css";
import UploadImage from "./components/upload";
import { useEffect } from "react";
import { SampleForm } from "./components/SampleFormik/Form";

function App() {
  return (
    <div className="App">
      <h3>Axios</h3>
      <UploadImage />
      <h3>SampleForm</h3>
      <SampleForm />
    </div>
  );
}

export default App;
