import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import TestPage from './components/test/test'
import Medical from './components/Home/Medical/Medical';
import Education from './components/Home/Education/Education';
import Documents from './components/Home/Document/Document';
import Services from './components/Home/Serevice/Serevice';
import SchoolHome from './components/Other/School/School';
import HospitalHome from './components/Other/Hospital/Hospital';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUserData={setUserData} />} />
        <Route path="/signup" element={<SignUp setUserData={setUserData} />} />
        <Route path="/home" element={<Home userData={userData} />} />
        <Route path="/medical" element={<Medical userData={userData} />} />
        <Route path="/education" element={<Education userData={userData} />} />
        <Route path="/documents" element={<Documents userData={userData} />} />
        <Route path="/profile" element={<Profile userData={userData} />} />
        <Route path="/services" element={<Services userData={userData} />} />
        <Route path="/school" element={<SchoolHome />} />
        <Route path="/hospital" element={<HospitalHome />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
