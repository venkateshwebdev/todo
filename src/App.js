import Home from "./container/Home/Home";
import Navbar from "./container/Navbar/Navbar";
import './App.css'
import Entries from "./container/Entries/Entries";
import { Route,Routes } from "react-router-dom";
import AddTask from "./container/Entries/Tasks/AddTask";
const App = () => {
  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtask" element={<AddTask/>} />
      </Routes>
    </div>
   );
}

export default App;