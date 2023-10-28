import React, { useEffect, useState } from 'react';
import { Task } from "../../models/task.class";
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from "../pure/task"
import TaskForm from '../pure/forms/TaskForm';


const TaskListComponent = () => {
    
    const defaultTask1 = new Task("example1", "Estudiar", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("example2", "jalarsela", false, LEVELS.BLOCKING);
    const defaultTask3 = new Task("example3", "jugar LOL", true, LEVELS.URGENT);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true)

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log("actualizacion de las tareas")
        setLoading(false)
        return () => {
            console.log("el componente esta por desaparecer")
        };
    }, [tasks])

    function completeTask(task) {
        console.log('Complete this task:', task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        setTasks(tempTask);
    }

    function deleteTask(task) {
        console.log('Delete this task:', task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    return (
        <div>
            <div className='col-12'>
            <div className='card'>
            {/* card title */}
                <div className='card-header p-3'>
                    <h5>
                        Your Tasks:
                    </h5>
                </div>

                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* iterar sobre una lista de tareas */}
                            { tasks.map((task, index) => {
                                return (
                                        <TaskComponent
                                            key={index} 
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}
                                        >
                                        </TaskComponent>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <TaskForm></TaskForm>
            </div>
            </div> 
        </div>

    );
};



export default TaskListComponent;
