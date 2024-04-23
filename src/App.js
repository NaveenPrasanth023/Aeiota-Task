import logo from "./logo.svg";
import "./App.css";
import UploadImage from "./components/upload";
import { useEffect } from "react";
import { SampleForm } from "./components/SampleFormik/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/SampleFormik/loginForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginForm />} />
            <Route path="signup" element={<SampleForm />} />
            <Route path="home" element={<UploadImage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <h3>Axios</h3>

      <h3>SampleForm</h3> */}
      {/* <SampleForm /> */}
    </div>
  );
}

export default App;
