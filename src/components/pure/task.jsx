import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.css';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log( "tarea creada" )
        return () => {
           console.log('la tarea esta por desmontarse')
        };
    }, [task])

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        { task.level }
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        { task.level }
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        { task.level }
                    </span>
                </h6>)
            default:
                break;
        }
    }

    function taskCompleteIcon() {
        if(task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'red'}}></i>)
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <span className='mx-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                { taskCompleteIcon() } 
                <i onClick={() => remove(task)} className='bi-trash task-action' style={{color: 'orange'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
