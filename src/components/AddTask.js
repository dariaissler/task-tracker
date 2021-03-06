import {useState} from 'react';

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

   const handleSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add task')
            return
        }
        onAddTask({text, day, reminder})
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
       <form className='add-form' onSubmit={handleSubmit}>
 <div className='form-control'>
<input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='Add Task'/>
 </div>
 <div className='form-control'>
<input value={day} onChange={(e) => setDay(e.target.value)}  type='text' placeholder='Add Day & Time'/>
 </div>
 <div className='form-control form-control-check'>
<label>Set Reminder</label>
<input checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}  type='checkbox'/>
 </div>
 <input className='btn btn-block' type='submit' value='Add Task'/>
       </form>
    )
}

export default AddTask
