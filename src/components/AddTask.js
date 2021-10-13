import Error from './Error';
import React, { useState } from 'react';

/**
 * FUNCTION : AddTask({tasks, setTasks}) 
 * FUNCTIONALITY : COMPONENT FOR ADDING TASK
 * @param {tasks, setTasks} : (1) TASKS OBJECT & (2) SET TASKS STATE CHANGE METHOD 
 * @returns : <AddTask/>
 */
const AddTask = ({ tasks, setTasks }) => {

    //STATES OF THE FORM
    const [task, setTask] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [reminder, setReminder] = useState(false);
    const [errorState, setErrorState] = useState(false);

    //METHODS TO CHANGE STATES OF FORM ELEMENTS
    const reminderInput = (event) => setReminder(!reminder);
    const taskInput = (event) => setTask(event.target.value);
    const dateTimeInput = (event) => setDateTime(event.target.value);

    /**
     * FUNCTION : addTask(event)
     * FUNCTIONALITY : ADDING A NEW TASK
     * @param {*} event : EVENT OBJECT
     * @returns : UNDEFINED
     */
    const addTask = async (event) => {
        event.preventDefault();                 //PREVENTS SUBMITTING TO A PAGE
        if (task && dateTime) {                   //WHEN FORM INPUT IS LEGIT
            setErrorState(false);               //NOT DISPLAYING THE ERROR COMPONENT

            const taskObj = {
                id: tasks.length ? tasks[tasks.length - 1]["id"] + 1 : 1,
                text: task,
                day: dateTime,
                reminder: reminder
            };
            await fetch(
                "http://localhost:5000/tasks",
                { 
                    "method": "POST",
                    "headers": {"Content-Type": "application/json"},
                    "body": JSON.stringify(taskObj)
                });
            setTasks([...tasks, taskObj]);      //SETTING TASK VALUE

            //SETTING FORM VALUE BACK TO DEFAULT
            setTask("");
            setDateTime("");
            setReminder(false);
        }
        else setErrorState(true);              //ELSE SHOW THE ERROR COMPONENT
    };

    //JSX COMPONENT
    return (
        <>
            <form className="m-2 p-2">
                <div className="form-input">
                    <label htmlFor="task-input" className="fw-bolder mb-1">Enter task</label>
                    <input value={task} onChange={taskInput} name="task-input" id="task-input" className="task-input form-control" type="text" placeholder="Enter task" required={true} />
                </div>
                <div className="form-input">
                    <label htmlFor="day-time" className="fw-bolder mb-1">Enter day & time</label>
                    <input value={dateTime} onChange={dateTimeInput} name="day-time" id="day-time" className="day-time form-control" type="text" placeholder="Enter day & time" required={true} />
                </div>
                <div className="form-input d-flex align-items-center">
                    <label htmlFor="reminder" className="fw-bolder">Reminder</label>&nbsp;
                    <input name="reminder" onChange={reminderInput} id="reminder" className="reminder" type="checkbox" checked={reminder} required={true} />
                </div>
                <button type="submit" onClick={addTask} className="btn btn-dark w-100">Save Task</button>
            </form>
            {errorState && <Error />}
        </>
    );
}

export default AddTask;