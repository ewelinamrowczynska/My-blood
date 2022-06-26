import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
