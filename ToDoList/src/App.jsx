import { Component } from "react";
import Display from "./Display.jsx";
import "./App.css"

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      totalTasks:[],
      Note:{
        key:'',
        description:'',
      }
    };
    this.submitTask = this.submitTask.bind(this);
    this.inputTask = this.inputTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  };

  inputTask=(e)=>{
    this.setState(
      {
        Note:{
          key:Date.now(),
          description : e.target.value
        }
      }
    )
  };

  deleteTask=(key)=>{
    let filterItems = this.state.totalTasks.filter(item=>item.key!==key);
    this.setState({
      totalTasks:filterItems
    })
  }

  updateTask=(newDescription,key)=>{
    let totalTasks = this.state.totalTasks;

    totalTasks.map(item=>{
      if(item.key==key){
        item.description = newDescription;
      }
    })
    this.setState({
      totalTasks:totalTasks
    })
  }

  submitTask=(e)=>{
    let newTask = this.state.Note;
    if(newTask.description!==""){
      let totalTasks = [...this.state.totalTasks, newTask];
      this.setState({
        totalTasks : totalTasks,
        Note:{
          key:'',
          description:''
        }
      })
    }
  }

  render(){
    return(
        <div className="container">
        
          <div>
            <input className="inputBox" type="text" placeholder="Add your Note" value={this.state.Note.description} onChange={this.inputTask} />
            <button className="addbtn" type="submit" onClick={this.submitTask}>Add Note</button>
          </div>

          <p>{this.state.Note.description}</p>

          <Display totalTasks={this.state.totalTasks} deleteTask={this.deleteTask} updateTask={this.updateTask} />  

        </div>

    );
  }
};