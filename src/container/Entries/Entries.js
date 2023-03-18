import "./entries.css"
import { NavLink } from "react-router-dom";
import taskList from '../../taskList'
import Tasks from "./Tasks/Tasks";
import { useState } from "react";
const weekDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
const Entries = () => {
    const [active,setActive] = useState(true);
    const handleTasks = ()=>{
        setActive(true)
    }
    const handleBoards = ()=>{
        setActive(false)
    }
    
    return (
        <div className="entries-container" id="EC">
            {/* <NavLink to="#EC"> */}
            <div className={`entries-nav ${active?"tasks":"boards"}`}>
               <div onClick={handleTasks} className={`entries-task`}><span className="count"></span>Tasks</div>
                <div onClick={handleBoards} className={`entries-boards`}><span className="count"></span>Boards</div>
            </div>
            <div className="weekDays">
                {weekDays.map((e)=><div className="week">{e}</div>)}
            </div>
            {/* </NavLink> */}
            <div className={`entries-main ${active?"t":"b"}`}>
                <div className="tasksContainer"><Tasks /></div>
                <div className="boardsContainer"></div>
                
            </div>
        </div>
     );
}
 
export default Entries;
