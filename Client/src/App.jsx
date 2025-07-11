import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [userData, setUserData] = useState(null); // <-- Shared user data

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUserData={setUserData} />} />
        <Route path="/home" element={<Home userData={userData} />} />
      </Routes>
    </Router>
  );
}

export default App;
