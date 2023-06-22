import { BrowserRouter , Routes , Route  } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewDetails from "./components/ViewDetails";
import Login from "./components/Login"
import { useState } from "react";


function App() {
  let [LoggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("userlogin")))

  return (
    <BrowserRouter>
      <Navbar LoggedIn= {LoggedIn} setLoggedIn = {setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<ViewDetails/>}/>
        <Route path="/login" element={<Login setLoggedIn = {setLoggedIn}/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
