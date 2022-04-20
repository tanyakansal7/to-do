
import TaskItem from '../taskItem/TaskItem';

import './Task.css';
const Task=()=>{
    return(
        <div className='task'>
           
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </div>
    )
}
export default Task;