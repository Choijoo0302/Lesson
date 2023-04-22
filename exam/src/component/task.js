import { useState } from 'react';
import Task from './task';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  }

  const handleTaskAdd = () => {
    if (taskName !== '') {
      setTasks([...tasks, { id: Date.now(), name: taskName }]);
      setTaskName('');
    }
  }

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input type="text" value={taskName} onChange={handleTaskNameChange} />
        <button onClick={handleTaskAdd}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={handleTaskDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;