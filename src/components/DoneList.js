import React from 'react';
import DoneTask from './DoneTask.js';

const DoneList = (props) => {
    let done = props.tasks.filter(task => task.finish);
    if(done.length > 1) {
        done.sort((a, b) => {return b.finish - a.finish});
    }
    const doneTasks = done.map(task => <DoneTask key={task.id} task={task} remove={props.remove}/>);
    return (
        <div className="tasks-done">
            <h3>Zadania wykonane <em>({done.length})</em></h3>
            <table>
                <tbody>
                {doneTasks.slice(0, 3)}
                </tbody>
            </table>
        </div>
    )
};

export default DoneList;