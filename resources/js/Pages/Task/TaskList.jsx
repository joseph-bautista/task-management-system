import React, { useState, useEffect } from 'react';
import { getAllTasks, createTask, getTask, updateTask, deleteTask, updateTaskStatus, getAllUsers } from '@/api/api';
import Task from './Task';
import "../../../css/tasklist.css";

const TaskList = ({tasklists, setTasklists}) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await getAllTasks();
        setTasks(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTasks();
  }, [tasklists, setTasklists]);

  const handleTaskUpdate = async (taskId, newStatus) => {
    try {
      await updateTaskStatus(taskId, newStatus);
      const updatedTasks = await getAllTasks();
      setTasks(updatedTasks.data);
    } catch (error) {
      console.error(error);
    }
  };
const handleTaskDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      const updatedTasks = await getAllTasks();
      setTasks(updatedTasks.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task-list">
      <h2><strong>Backlog</strong></h2>
      <div className="task-column">
        {tasks && tasks.length > 0 ? (
          tasks
            .filter((task) => task.status == 'backlog')
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
              />
            ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>

      <h2><strong>Ready To Do</strong></h2>
      <div className="task-column">
        {tasks && tasks.length > 0 ? (
          tasks
            .filter((task) => task.status == 'ready_to_do')
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
              />
            ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>

      <h2><strong>In Progress</strong></h2>
      <div className="task-column">
        {tasks && tasks.length > 0 ? (
          tasks
            .filter((task) => task.status == 'in_progress')
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
              />
            ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>

      <h2><strong>Done</strong></h2>
      <div className="task-column">
        {tasks && tasks.length > 0 ? (
          tasks
            .filter((task) => task.status == 'done')
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
              />
            ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
    
  );
};

export default TaskList;
