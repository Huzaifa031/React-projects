import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

let name = "huzzu";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text Analyser - Darkmode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text Analyser - Lightmode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
