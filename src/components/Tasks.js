import Task from "./Task";
import React, { useState } from 'react'

/**
 * FUNCTION : Tasks COMPONENT RENDERS THE LIST OF Task COMPONENTS
 * FUNCTIONALITY : TO RENDER THE LIST OF TASKS
 * @param {*} props : PROPERTIES PASSED TO THE COMPONENT
 * @returns : <Task/>[]
 */
const Tasks = (props) => {

    //GETTING TASKS PROPS PASSED DOWN
    const tasks = props.tasks;

    //<Tasks/>(JSX)
    return (
        <>
            {
                //RENDERING AN ARRAY OF TASK COMPONENTS
                tasks.map((element, index, array) => {
                    return <Task key={element.id} properties={element} onDelete={props.onDelete} onToggle={props.onToggle} />;
                })
            }
        </>
    );
}

export default Tasks
