import "./style/style.css";
import Tasks from "./components/Tasks";
import React, { useState } from 'react';
import Header from "./components/Header";
import AddTask from "./components/AddTask";

function App() {

    //TASKS
    const [tasks, setTasks] = useState([]);                           //SETS TASKS STATE
    const [showTaskForm, setShowTaskForm] = useState(false);          //SETS STATE FOR SHOWING TASK FORM  

    /**
     * FUNCTION : deleteTask(id)
     * FUNCTIONALITY : DELETING/REMOVING TASKS FROM THE TASK STATE WITH A PARTICULAR ID  
     * @param {*} id : ID OF THE TASK WHICH NEEDS TO BE DELETED
     * @returns : UNDEFINED
     */
    const deleteTask = (id) => {
        tasks.filter((task) => {
            setTasks(tasks.filter((task, index, array) => {
                if(task.id!==id)
                    return task;
            }));
        });
    };

    /**
     * FUNCTION : toggleTask(id)
     * FUNCTIONALITY : TOGGLE THE REMINDER VALUE OF TASKS
     * @param {*} id : ID OF THE TOGGLED TASK
     * @returns : UNDEFINED
     */
    const toggleTask = (id) =>{
        setTasks(
            tasks.map((task) => {
                if(task.id === id)  task.reminder = !task.reminder;                    
                return task
            }
        ));
    };


    return (
        <div className="app border border-dark p-3">
            <Header onAdd={()=>setShowTaskForm(!showTaskForm)}/>
            { showTaskForm && <AddTask tasks={tasks} setTasks={setTasks}/> }
            {
                tasks.length>0?
                <Tasks tasks={tasks} setTasks={setTasks} onDelete={deleteTask} onToggle={toggleTask} className="mt-3"/>:
                <div className="m-2">No tasks to show</div>
            }
        </div>
    );
}

export default App;
