import './addtask.css'
const AddTask = () => {
    return ( 
        <div className="addTask-container">
            <div className="addTask-head"></div>
            <div className="addTask-main">
                <form onSubmit={e.preventDefault()}>
                    <input className="task-input" type={"text"} placeholder={"Task..."}  />
                    <input className="description-input" type={"text"} placeholder={"add description...."}  />
                    /*Implement Calender*/
                </form>
            </div>
            <div className="addTask-foot">
                <button className="addTask-button">Add Task </button>
            </div>
        </div>
     );
}
 
export default AddTask;