import './App.css';
import Form from "./component/Form"
import SoloTravel from "./component/SoloTravel"
import FamilyTravel from "./component/FamilyTravel"
import GroupTravel from "./component/GroupTravel"
import Home from "./component/Home"
import HotList from './component/HotList';
import { Route, Routes,Link } from "react-router-dom"

const family = {
  fontFamily: "font-serif"
}

function App() {

  return (
    <div style={family} className='bg-teal-100'>
      <ul>
        <li>
          <Link to="/SoloTravel" replace></Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SoloTravel" element={<SoloTravel />} />
        <Route path="/FamilyTravel" element={<FamilyTravel />} />
        <Route path="/GroupTravel" element={<GroupTravel />} />
        <Route path="/HotList" element={<HotList />}/>
      </Routes>
    </div>
  );
}

export default App;
