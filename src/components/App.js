import React from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import DoneList from './DoneList.js';
import EmptyInfo from './EmptyInfo.js';
import ModalRemove from './ModalRemove.js';
import './App.css';

class App extends React.Component {
    state = {
        tasks: [
            {
                id: 0,
                name: 'Przykładowe zadanie 1',
                begin: '2019.09.25, 12:20:43',
                deadline: '2019-12-01',
                finish: null,
                important: false,
                active: true
            },
            {
                id: 1,
                name: 'Przykładowe zadanie 2',
                begin: '2019.09.20, 15:34:55',
                deadline: '2020-11-01',
                finish: null,
                important: false,
                active: true
            },
            {
                id: 2,
                name: 'Przykładowe zadanie 3',
                begin: '2019.09.01, 21:02:22',
                deadline: '2021-05-01',
                finish: null,
                important: true,
                active: true
            },
            {
                id: 3,
                name: 'Przykładowe zadanie 4',
                begin: '2019.06.05, 09:20:02',
                deadline: '2020-03-22',
                finish: null,
                important: true,
                active: true
            }
        ],
        modal: {active: false, number: null}
    };
    idCounter = this.state.tasks.length;
    handleDone = (id) => {
        let tasks = this.state.tasks.map(task => {
            if(task.id === id) {
                task.finish = new Date();
                task.active = false;
            }
            return task;
        });
        this.setState({tasks});
    };
    handleRemove = (id) => {
        let tasks = this.state.tasks.map(task => {
            if(task.id === id) {
                task.active = false;
                task.finish = null;
            }
            return task;
        });
        this.setState({tasks});
        this.hideModal();
    };
    showModal = (number) => {
        this.setState({modal: {active: true, number: number}});
    };
    hideModal = () => {
        this.setState({modal: {active: false}});
    };
    addTask = (name, important, deadline) => {
        let task = {
            id: this.idCounter,
            name,
            begin: new Date().toLocaleString(),
            deadline,
            finish: null,
            important,
            active: true
        };
        this.idCounter++;
        let tasks = [...this.state.tasks, task];
        this.setState({tasks});
    };
    render() {
        const {tasks, modal} = this.state;
        let active = tasks.filter(task => {
            return task.active;
        });
        return (
            <React.Fragment>
                {modal.active ? <ModalRemove hideModal={this.hideModal} remove={this.handleRemove} modal={modal}/> : ''}
                <div className="container">
                    <AddTask add={this.addTask}/>
                    {active.length ? <TaskList tasks={tasks} done={this.handleDone} showModal={this.showModal}/> : <EmptyInfo/>}
                    <DoneList tasks={tasks} remove={this.handleRemove}/>
                </div>
            </React.Fragment>
        );
    }
}

export default App;