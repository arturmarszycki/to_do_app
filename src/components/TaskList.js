import React from 'react';
import Task from './Task.js';

const TaskList = (props) => {
    let activeTasks = props.tasks.filter(task => task.active);
    if(activeTasks.length > 1) {
        activeTasks.sort((a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        });
    }
    const tasks = activeTasks.map(task => <Task key={task.id} task={task} done={props.done} showModal={props.showModal}/>);
    return (
        <div className="tasks-current">
            <h3>Zadania do zrobienia</h3>
            <table>
                <thead>
                <tr>
                    <th>Data dodania</th>
                    <th>Zadanie</th>
                    <th>Deadline</th>
                    <th>Opcje</th>
                </tr>
                </thead>
                <tbody>
                {tasks}
                </tbody>
            </table>
            <hr/>
        </div>
    )
};

export default TaskList;