import '../entries.css'
import { useEffect, useState } from 'react'
import CompleteTaskPage from './CompleteTaskPage'
import { useDispatch, useSelector } from 'react-redux'
import { deletefromList } from '../../store'
import {modalStatus,modalDetails} from "../../store"
import {AiOutlineDelete} from "react-icons/ai"
import {IoCheckmarkDoneSharp} from "react-icons/io5"
const Tasks = () => {
    const data = useSelector((state)=>state.task.data)
    const dispatch = useDispatch()
    const createTaskCards = (e)=>{
        const handleTaskDone = (event,e)=>{
            event.stopPropagation();
            // event.preventDefault();
            const index = e.id
            dispatch(deletefromList(index))
            
        }
        const handleCardClick= (e)=>{
            dispatch(modalStatus(true))
            dispatch(modalDetails(e.id))
        }
        return(
            <div onClick={()=>handleCardClick(e)} className={`taskCard ${e.id%3==0&&"third"} ${e.id%2==0&&"second"}` }>
                <div className="taskCard-nav">
                    <div className="createdtime">{e.cdate}</div>
                    <div className="timeremaining">{e.ctime}</div>
                    <div onClick={(event)=>{handleTaskDone(event, e)}} className="taskCard-button"><IoCheckmarkDoneSharp/></div>
                    <div onClick={(event)=>{handleTaskDone(event, e)}} className="taskCard-button d"><AiOutlineDelete/></div>
                </div>
                <div className="taskCard-main">{e.title}</div>
            </div>
        )
    }
    return ( 
        <div className={`tasks-container`}>
            <div className={`full-task`}><CompleteTaskPage/></div>
            <div className='tl'>{data?.map((e)=>(createTaskCards(e)))}</div>
            
        </div>
     );
}
 
export default Tasks;