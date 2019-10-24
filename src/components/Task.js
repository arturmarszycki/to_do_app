import React from 'react';

const Task = (props) => {
    let mark = props.task.id;
    return (
        <tr>
            <td>
                {props.task.begin}
            </td>
            <td className={props.task.important ? 'important' : ''}>
                {props.task.name}
            </td>
            <td>
                {props.task.deadline}
            </td>
            <td>
                <button onClick={() => props.done(mark)} className="btn_done">Zrobione</button>
                <button onClick={() => props.showModal(mark)} className="btn_remove">Usuń</button>
            </td>
        </tr>
    )
};

export default Task;