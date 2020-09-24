import React, { Component } from 'react'

export default class ToDooIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: [],
            newTask: '',
            newComp: false
        }
        this.createTask = this.createTask.bind(this)
        this.finishedTask = this.finishTask.bind(this)
    }

    createTask(e) {
        e.preventDefault();
        let newTask = {
            name: this.state.newTask, 
            finished: false
        }
        this.setState(prevState => ({
            task: [newTask, ...prevState.task]
        }))
    }
    finishTask(index) {
        let tempArr= [...this.state.task];
        tempArr[index].finished=!tempArr[index].finished;
        this.setState({task:tempArr})
    }

    render() {
        return (
            <div>
                <h4>My Task List</h4>
                <ol>
                    {this.state.task.map((task,index) =>
                         {
                         return <li>
                             <input
                             type='checkbox' 
                             onChange={()=>{this.finishTask(index)}} />
                             {`   ${task.name}`}
                             </li>
                         })}
                </ol>
                <hr />
                <h5> Enter New Task</h5>
                <br />
                <form onSubmit={e => this.createTask(e)}>
                    <input placeholder="Task Description" type="text" onChange={e => { this.setState({ newTask: e.target.value }) }} />
                    <br />
                    <br />
                    <button type='submit'>Create New Task</button>
                </form>
                <br/>

            </div>
        )
    }
}