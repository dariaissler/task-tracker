import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';


const Task = ({task, onDelete, onToggle, onMark}) => {
    return (
        <div 
         className={`task ${task.reminder && !task.completed ? 'reminder' : ''}`}
         onDoubleClick={() => onToggle(task.id)}
         >
            <h3 style={{textDecoration: task.completed ? ' line-through' : 'none'}}>
                {task.text}{' '} 
                <div>
                <CheckCircleOutlineOutlinedIcon style={{color: task.completed ? 'green' : 'white'}}
                onClick={() => onMark(task.id)}/>
                <DeleteIcon
         onClick={() => onDelete(task.id)}/>
                </div>
              
                </h3>
            <p>{task.day}</p>
        </div>
        
        
    )
}

export default Task
