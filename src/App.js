import Navbar from "./components/Navbar";
import Newsbox from "./components/Newsbox";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#41464b"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode = {toggleMode}/>
        <Routes>
          <Route path="/" element={<Newsbox key="general" pageSize={12} category = "general" mode = {mode}/>} />
          <Route path="/business" element={<Newsbox key="business" pageSize={12} category = "business" mode = {mode}/>} />
          <Route path="/sports" element={<Newsbox key="sports" pageSize={12} category = "sports" mode = {mode}/>} />
          <Route path="/entertainment" element={<Newsbox key="entertainment" pageSize={12} category = "entertainment" mode = {mode}/>} />
          <Route path="/science" element={<Newsbox key="science" pageSize={12} category = "science" mode = {mode}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer mode = {mode}/>
      </Router>
    </>
  );
}

export default App;
