import './App.css';
import { useState } from 'react';
function App() {
const[inputData,setInputData]=useState('');
const[taskList,setTaskList]=useState([]);
const addTask=()=>{
  if(!inputData){}
  else{
  setTaskList([...taskList,inputData]);
}
  
}
const delTask=(ind)=>{
  console.log(ind)
  const finalList=taskList.filter((elem,id)=> id!==ind)
  
  setTaskList(finalList);
  
}

  return (
  <>     
  <h1>Hello! Add a few notes</h1>
       <div className="base">
         <div className="add-task">
        
         <input type="text"  className='input' onChange={(e)=>setInputData(e.target.value)}/>
    
          <button className="btn" onClick={addTask}>ADD +</button>
         </div>
         <div className="task-list">
         
           {
            taskList.map((task,ind)=>{
              return(
              <div className="task" key={ind}>{task}<i className="fa-solid fa-xmark" onClick={()=>delTask(ind)}></i></div>
              )
            })
           
           }
           
         </div>
       </div>
  </>
  );
}

export default App;
