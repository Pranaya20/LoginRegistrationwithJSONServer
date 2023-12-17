import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
      <Routes>
           <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registraton" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
