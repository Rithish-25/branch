// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Name from './components/name';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h2>Iam dev 1</h2>} />
          <Route path="/name" element={<Name />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
