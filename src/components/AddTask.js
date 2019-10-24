import React from 'react';
import './addTask.css';

class AddTask extends React.Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: '',
        important: false,
        date: this.minDate,
        valid: true
    };
    handleText = (e) => {
        this.setState({text: e.target.value});
    };
    handleImportant = (e) => {
        this.setState({important: e.target.checked});
    };
    handleDate = (e) => {
        this.setState({date: e.target.value});
    };
    handleClick = () => {
        const {text, important, date} = this.state;
        if(text.length > 2) {
            this.props.add(text, important, date);
            this.setState({text: '', important: false, date: this.minDate, valid: true});
        } else {
            this.setState({valid: false});
        }
    };
    render() {
        let maxDate = Number(this.minDate.slice(0, 4)) + 1;
        maxDate = String(maxDate + '-12-31');
        return (
            <div className="add-task">
                <h3>Dodaj zadanie</h3>
                <div className={this.state.valid ? 'add-part' : 'add-part validate'}>
                    <input type="text" placeholder="dodaj zadanie" id="task" onChange={this.handleText} value={this.state.text}/>
                    <input type="checkbox" id="important" onChange={this.handleImportant} checked={this.state.important}/>
                    <label htmlFor="important">Priorytet</label>
                    <span className="validate_msg">minimalna ilość znaków: 3</span>
                </div>
                <div className="add-part">
                    <label htmlFor="date">Do kiedy zrobić</label>
                    <input type="date" id="date" min={this.minDate} max={maxDate} onChange={this.handleDate} value={this.state.date}/>
                </div>
                <button className="btn_add_task" onClick={this.handleClick}>Dodaj</button>
                <hr/>
            </div>
        );
    }
}

export default AddTask;