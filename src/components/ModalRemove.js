import React from 'react';

const ModalRemove = (props) => {
    let mark = props.modal.number;
    return (
        <div className="modal-container" onClick={props.hideModal}>
            <div className="modal-remove" onClick={(e) => e.stopPropagation()}>
                <p>Czy na pewno usunąć to zadanie?</p>
                <button className="btn_cancel" onClick={props.hideModal}>Anuluj</button>
                <button className="btn_remove" onClick={() => props.remove(mark)}>Usuń</button>
            </div>
        </div>
    )
};

export default ModalRemove;