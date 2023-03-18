import '../entries.css'
import taskList from '../../../taskList'
import { useState } from 'react'
import CompleteTaskPage from './CompleteTaskPage'
const Tasks = () => {
    const [active,setActive] = useState(false)
    console.log(taskList)
    const createTaskCards = (e)=>{
        const handleCardClick =(e)=>{
          setActive(true)  
        }
        return(
            <div onClick={handleCardClick} className={`taskCard ${e.id%3==0&&"third"} ${e.id%2==0&&"second"}` }>
                <div className="taskCard-nav">
                    <div className="timeremaining">1h30m</div>
                    <div className="taskCard-button">✔️</div>
                </div>
                <div className="taskCard-main">Walk My Dog</div>
            </div>
        )
    }
    return ( 
        <div className={`tasks-container ${active&&"full-task-active"}`}>
            <div className={`full-task`}><CompleteTaskPage/></div>
            <div className='tl'>{taskList.map((e)=>(createTaskCards(e)))}</div>
            
        </div>
     );
}
 
export default Tasks;