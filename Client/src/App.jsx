import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import Home from './components/Home/Home';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUserData={setUserData} />} />
        <Route path="/signup" element={<SignUp setUserData={setUserData} />} />
        <Route path="/home" element={<Home userData={userData} />} />
      </Routes>
    </Router>
  );
}

export default App;
