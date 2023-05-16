import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Section from './Components/Section';
import Login from './Components/Login';
import Carousal from './Components/Carousal';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Section />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Carousal" element={<Carousal />}></Route>
        
      </Routes>
     
    </>
  );
}

export default App;
