import axios from 'axios';

const BASE_URL = 'http://localhost/api/v1'; 

// Function to fetch all tasks
export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching tasks');
  }
};

// Function to add a new task
export const createTask = async (taskData) => {
  console.log(taskData);
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, taskData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding task');
  }
};

// Function to get task
export const getTask = async (taskId) => {
    try {
      const response = await axios.get(`${BASE_URL}/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching task');
    }
  };

// Function to update a task
export const updateTask = async (taskId, taskData) => {
    try {
      const response = await axios.put(`${BASE_URL}/tasks/${taskId}`, taskData);
      return response.data;
    } catch (error) {
      throw new Error('Error updating task');
    }
  };
  
// Function to delete a task
export const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting task');
    }
  };

// Function to update task status
export const updateTaskStatus = async (taskId, newStatus) => {
  try {
    const response = await axios.post(`${BASE_URL}/update_status/${taskId}`, { status: newStatus });
    return response.data;
  } catch (error) {
    throw new Error('Error updating task status');
  }
};

// Function to fetch all users
export const getAllUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  };

export default { getAllTasks, createTask, getTask, updateTask, deleteTask, updateTaskStatus, getAllUsers };
