import '../entries.css'
import { useEffect, useState } from 'react'
import CompleteTaskPage from './CompleteTaskPage'
import { useDispatch, useSelector } from 'react-redux'
import { deletefromList } from '../../store'
import {AiOutlineDelete} from "react-icons/ai"
import {IoCheckmarkDoneSharp} from "react-icons/io5"
const Tasks = () => {
    const data = useSelector((state)=>state.task.data)
    console.log("inti stat e", data);
    const dispatch = useDispatch()
     const [active,setActive] = useState(false)
    const createTaskCards = (e)=>{
        const handleTaskDone = (e)=>{
            const index = e.id
            dispatch(deletefromList(index))
        }
        return(
            <div className={`taskCard ${e.id%3==0&&"third"} ${e.id%2==0&&"second"}` }>
                <div className="taskCard-nav">
                    <div className="createdtime">{e.cdate}</div>
                    <div className="timeremaining">{e.ctime}</div>
                    <div onClick={()=>{handleTaskDone(e)}} className="taskCard-button"><IoCheckmarkDoneSharp/></div>
                    <div onClick={()=>{handleTaskDone(e)}} className="taskCard-button d"><AiOutlineDelete/></div>
                </div>
                <div className="taskCard-main">{e.title}</div>
            </div>
        )
    }
    return ( 
        <div className={`tasks-container ${active&&"full-task-active"}`}>
            <div className={`full-task`}><CompleteTaskPage/></div>
            <div className='tl'>{data?.map((e)=>(createTaskCards(e)))}</div>
            
        </div>
     );
}
 
export default Tasks;