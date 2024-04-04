import logo from './logo.svg';
import './App.css';
import { Signup } from './Pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Pages/Login';
import { Profile } from './Pages/Profile';
import{Home} from './Pages/Home'
import { Position } from './Pages/Position';
import VerificationMail from './Pages/VerificationMale';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/position" element={<Position/>} />
      <Route path="/verificationMAil" element={<VerificationMail/>} />
    </Routes>
  );
}
