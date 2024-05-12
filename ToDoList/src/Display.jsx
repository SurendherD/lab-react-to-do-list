import React from "react";
import './App.css'

 function Display(props){
  let totalTasks = props.totalTasks
  let newTask = totalTasks.map(item => {
    return(
      <div key={item.key}>
        <input className="displayBox" type="text" id={item.key} value={item.description} onChange={(event)=>{props.updateTask(event.target.value,item.key)}}></input>
        <button className="deletebtn" onClick={()=>{props.deleteTask(item.key)}}>Delete Note</button>
      </div>
    )
    
  });
  return(
    <div>
      {newTask}
    </div>
  )
}

export default Display;