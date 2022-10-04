import logo from './logo.svg';
import './App.css';
import NavBar from "./component/NavBar"
import Form from "./component/Form"
import SoloTravel from "./component/SoloTravel"
import FamilyTravel from "./component/FamilyTravel"
import GroupTravel from "./component/GroupTravel"
import Home from "./component/Home"
//import Logo from "./component/Logo"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SoloTravel" element={<SoloTravel />} />
        <Route path="/FamilyTravel" element={<FamilyTravel />} />
        <Route path="/GroupTravel" element={<GroupTravel />} />
      </Routes>
    </>
  );
}

export default App;
