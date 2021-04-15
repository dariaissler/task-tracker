import Task from './Task';



const Tasks = ({tasks, onDelete, onToggle, onMark}) => {

    return (
        <>
           {tasks.map((task) => (
           <Task onDelete={onDelete} 
                 key={task.id} 
                 task={task}
                 onToggle={onToggle}
                 onMark={onMark}/> 
           ))} 
        </>
    )
}

export default Tasks
