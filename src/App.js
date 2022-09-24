import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Buttons from "./Components/Button";
import Cards from "./Components/Cards";
import Charts from "./Components/Charts";
import Error from "./Components/Error";
import Blank from "./Components/Blank";
import Colors from "./Components/Colors";
import Borders from "./Components/Borders";
import Tables from "./Components/Table";
import Animation from "./Components/Animation";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import Forgetpassword from './Components/Forgetpassword';
import Other from './Components/Other';
import Register from './Components/Register';

function App() {
  return (
    <div >
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="/borders" element={<Borders />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/other" element={<Other />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/button" element={<Buttons />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/table" element={<Tables />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
