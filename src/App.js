import "./style/style.css";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import AddTask from "./components/AddTask";

function App() {

    //STATES
    const [tasks, setTasks] = useState([]);                           //SETS TASKS STATE
    const [showTaskForm, setShowTaskForm] = useState(false);          //SETS STATE FOR SHOWING TASK FORM  

    //HOOKS
    //USE EFFECT HOOK DEALS WITH SIDE-EFFECTS
    useEffect(()=>{  
        const getTasks = async () =>{                                //GETTING FETCHED TASKS
            const getData =  await fetchTasks();    
            setTasks(getData);
        };
        getTasks();
    },[]);

    //METHODS
    /**
     * FUNCTION : FETCH TASK LIST FROM THE DATABASE
     * FUNCTIONALITY : FETCHING TASKS FROM THE FAKE API
     * @param : UNDEFINED
     * @returns : TASK LIST
     */
    async function fetchTasks () {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();
        return data;
    };

    /**
     * FUNCTION : deleteTask(id)
     * FUNCTIONALITY : DELETING/REMOVING TASKS FROM THE TASK STATE WITH A PARTICULAR ID  
     * @param {*} id : ID OF THE TASK WHICH NEEDS TO BE DELETED
     * @returns : UNDEFINED
     */
    const deleteTask = (id) => {
        tasks.filter((task) => {
            setTasks(tasks.filter((task, index, array) => {
                if (task.id !== id)
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
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) task.reminder = !task.reminder;
                return task
            }
            ));
    };


    return (
        <div className="app border border-dark p-3">
            <Header onAdd={() => setShowTaskForm(!showTaskForm)} showAddForm={showTaskForm}/>
            {showTaskForm && <AddTask tasks={tasks} setTasks={setTasks} />}
            {
                tasks.length > 0 ?
                    <Tasks tasks={tasks} setTasks={setTasks} onDelete={deleteTask} onToggle={toggleTask} className="mt-3" /> :
                    <div className="m-2">No tasks to show</div>
            }
        </div>
    );
}

export default App;
