import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TaskList from './Task/TaskList';
import { createTask, getAllTasks } from '@/api/api';

export default function Dashboard({ auth }) {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [tasklists, setTasklists] = useState([]);

    const handleTaskSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTask({ name: taskName, description: taskDescription });
            const data = await getAllTasks();
            setTasklists(data.data);
        } catch (error) {
            console.error(error);
        }
        setTaskName('');
        setTaskDescription('');
    };

    const buttonStyle = {
        width: '100%',
      };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tasks</h2>}
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleTaskSubmit}>
                                <input
                                    className='border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full mb-1 text-black-900 dark:text-black-100'
                                    type="text"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    placeholder="Task Name"
                                />
                                <textarea
                                    className='border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full mb-1 text-black-900 dark:text-black-100'
                                    value={taskDescription}
                                    onChange={(e) => setTaskDescription(e.target.value)}
                                    placeholder="Task Description"
                                ></textarea>
                                <button style={buttonStyle} className='ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mb-2' type="submit">Add Task</button>
                            </form>
                            <TaskList tasklists={tasklists} setTasklists={setTasklists}></TaskList>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
