import Home from "./container/Home/Home";
import Navbar from "./container/Navbar/Navbar";
import './App.css'
import Entries from "./container/Entries/Entries";
import { Route,Routes } from "react-router-dom";
import AddTask from "./container/Entries/Tasks/AddTask";
import { useSelector } from "react-redux";
import Modal from "./container/Entries/Modal";
const App = () => {
  const isActive = useSelector((state)=>state.modal.isActive);
  const target = useSelector((state)=>state.modal.target);
  console.log("modal is " ,isActive)
  console.log("modal is " ,target)
  return ( 
    <div className={`App`}>
      <div className={`${isActive?"modal":"noModal"}`}>
        <Modal id={target} />
      </div>
      <div className={`${isActive&&"hide"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtask" element={<AddTask/>} />
      </Routes>
      </div>

    </div>
   );
}

export default App;