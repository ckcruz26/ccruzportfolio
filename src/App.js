import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Timeline from "./pages/Timeline"
import Navigator from './components/Navigator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
        <Navigator/>
          <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/experience" element={<Experience/>}></Route>
             <Route path="/timeline" element={<Timeline/>}></Route>
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
