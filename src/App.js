import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react';
import AddTask from './components/AddTask';

function App(props) {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);


//Add Task 
const addTask = (task) => {
const id = Math.floor(Math.random() * 10000) + 1;
const newTask = {id, ...task}
setTasks([...tasks, newTask])
}
//Mark Task as completed
const markTask = (id) => {
  console.log(id)
  setTasks(
    tasks.map(task =>  task.id === id 
    ? {...task, completed: !task.completed} 
    : task
    )
  );
};

//Delete task
const deleteTask = (id) => {
   setTasks(tasks.filter(task => task.id !== id));
};
//Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map(task =>  task.id === id 
    ? {...task, reminder: !task.reminder} 
    : task
    )
  );
};

useEffect(() => {
  const getTasks = JSON.parse(localStorage.getItem('tasks'));
  if(getTasks) {
    setTasks(getTasks);
  }
  }, []);

useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

  return (
   <div className='container'>
   <Header onAdd={() => setShowAddTask(!showAddTask)} 
   title='Task tracker'
   showAddTask={showAddTask}/>
  {showAddTask && <AddTask onAddTask={addTask}/>} 
  {tasks.length > 0 ?  
   <Tasks 
  onDelete={deleteTask} 
  tasks={tasks}
  onToggle={toggleReminder}
  onMark= {markTask}/>
  : 'No tasks to show'
  }
   </div>
    
  );
}

export default App;
