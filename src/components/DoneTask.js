import React from 'react';

const DoneTask = (props) => {
    let mark = props.task.id;
    return (
        <tr>
            <td>
                {props.task.name}
            </td>
            <td>
                <i>zakończone {props.task.finish.toLocaleString()}</i>
            </td>
            <td>
                <button onClick={() => props.remove(mark)} className="btn_remove">Usuń</button>
            </td>
        </tr>
    )
};

export default DoneTask;