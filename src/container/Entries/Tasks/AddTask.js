import './addtask.css'
import { Link ,useNavigate } from 'react-router-dom'
import {GrFormClose} from "react-icons/gr"
import { useDispatch, useSelector } from 'react-redux'
import { addtoList } from '../../store'
import { useEffect, useState } from 'react'
const AddTask = () => {
    const data = useSelector((state)=>state.task.data)
    const currentDate = useSelector((state)=>state.date.currentDate)
    const [Ttitle,setTTitle] = useState("")
    const [Tdes,setTdes] = useState("")
    const [Tdate,setTdate] = useState("")
    const [Ttime,setTtime] = useState("")
    const [backcolor,setbackcolor] = useState(1);
    const navigate = useNavigate();
    console.log(backcolor)
    useEffect(()=>{
        setbackcolor(data.length+1)
    },[])
    const dispatch = useDispatch()
    const handleFrom = (e)=>{
        e.preventDefault()
        const createTask = {
            id:data.length+1,
            title:Ttitle,
            description:Tdes,
            cdate:Tdate,
            ctime:Ttime,
            createdAt:currentDate
        }
        console.log(createTask)
        dispatch(addtoList(createTask))
        navigate("/")
    }
    return ( 
        <div className={`addTask-container ${backcolor%2==0&&"second"} ${backcolor%3==0&&"third"}`}>
            <div className="addTask-head">
                <Link to="/"><div className='back-button'><GrFormClose className='close-icon' /></div></Link>
            </div>
            <div className="addTask-main">
                <form className='addtask-form'  onSubmit={handleFrom}>
                    <input onChange={(e)=>setTTitle(e.target.value)} className="task-input" type={"text"} placeholder={"Task..."} value={Ttitle} />
                    <input onChange={(e)=>setTdes(e.target.value)} className="description-input" type={"text"} placeholder={"add description...."}  value={Tdes} />
                    <input onChange={(e)=>setTdate(e.target.value)} type={"date"}  value={Tdate} />
                    <input onChange={(e)=>setTtime(e.target.value)} type={"time"}  value={Ttime} />
                    <button type='submit' className='add-task-button'>Add task</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddTask;