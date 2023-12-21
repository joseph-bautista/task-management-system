import React from 'react';
import Button from 'react-bootstrap/Button';

const Task = ({ task, onTaskUpdate, onTaskDelete }) => {
  const handleDragStart = (e) => {
    // Implement drag start logic
  };

  const handleDragEnd = (e) => {
    // Implement drag end logic
  };

  const handleStatusChange = (newStatus) => {
    // Call onTaskUpdate with the new status
    onTaskUpdate(task.id, newStatus.toLowerCase());
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  const buttonStyle = {
    width: '100%',
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <h3><strong>{task.name}</strong></h3>
      <p>{task.description}</p>
      <p><strong>Actions:</strong></p>
      
        <div><button style={buttonStyle} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-1' onClick={() => handleStatusChange('backlog')}>Backlog</button></div>
        <div><button style={buttonStyle} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-1' onClick={() => handleStatusChange('in_progress')}>
          In Progress
        </button></div>
        <div><button style={buttonStyle} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-1' onClick={() => handleStatusChange('done')}>Done</button></div>
        <div><button style={buttonStyle} className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mb-1' onClick={handleDelete}>Delete</button></div>
      
    </div>
  );
};

export default Task;
