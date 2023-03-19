import './addtask.css'
import { Link } from 'react-router-dom'
import {GrFormClose} from "react-icons/gr"
import { useDispatch, useSelector } from 'react-redux'
import { addtoList } from '../../store'
import { useEffect, useState } from 'react'
const AddTask = () => {
    const data = useSelector((state)=>state.task.data)
    const [Ttitle,setTTitle] = useState("")
    const [Tdes,setTdes] = useState("")
    const [Tdate,setTdate] = useState("")
    const [Ttime,setTtime] = useState("")
    const [backcolor,setbackcolor] = useState();
    useEffect(()=>{
        const random = Math.floor(Math.random()*3)
        const colors = ["blue","yellow","pink"]
        setbackcolor(colors[random]) 
    },[data])
    const dispatch = useDispatch()
    const handleFrom = (e)=>{
        e.preventDefault()
        const createTask = {
            id:data.length+1,
            title:Ttitle,
            description:Tdes,
            cdate:Tdate,
            ctime:Ttime,
            createdAt:Date.now()
        }
        console.log(createTask)
        dispatch(addtoList(createTask))
    }
    return ( 
        <div className={`addTask-container ${backcolor}`}>
            <div className="addTask-head">
                <Link to="/"><div className='back-button'><GrFormClose className='close-icon' /></div></Link>
            </div>
            <div className="addTask-main">
                <form className='addtask-form'  onSubmit={handleFrom}>
                    <input onChange={(e)=>setTTitle(e.target.value)} className="task-input" type={"text"} placeholder={"Task..."} value={Ttitle} />
                    <input onChange={(e)=>setTdes(e.target.value)} className="description-input" type={"text"} placeholder={"add description...."}  value={Tdes} />
                    <input onChange={(e)=>setTdate(e.target.value)} type={"date"} placeholder={Date.now()} value={Tdate} />
                    <input onChange={(e)=>setTtime(e.target.value)} type={"time"} placeholder={Date.now()} value={Ttime} />
                    <button type='submit'>Add task</button>
                </form>
            </div>
            <div className="addTask-foot">
                <button className="addTask-button">Add Task </button>
            </div>
        </div>
     );
}
 
export default AddTask;