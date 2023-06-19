import { BrowserRouter , Routes , Route  } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewDetails from "./components/ViewDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<ViewDetails/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
