// import React, { useState } from 'react';
// import { Box, TextField, Button } from '@mui/material';
// import Task from './Task';
// import { useSearchParams } from 'react-router-dom';

// const TodoList = ({ tasks, addTask, updateTask, toggleTaskCompletion, deleteTask }) => {
//     const [newTask, setNewTask] = useState('');
//     const [searchParams, setSearchParams] = useSearchParams();
//     const searchTerm = searchParams.get('search') || '';

//     const handleAddTask = () => {
//         if (newTask.trim()) {
//             addTask({
//                 id: Date.now(),
//                 title: newTask,
//                 description: 'Task description goes here.',
//                 completed: false,
//                 updatedAt: new Date().toLocaleString(),
//             });
//             setNewTask('');
//         }
//     };

//     const handleSearchChange = (e) => {
//         setSearchParams({ search: e.target.value });
//     };

//     const filteredTasks = tasks.filter(task =>
//         task.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <Box>
//             <Box className="add-task">
//                 <TextField
//                     label="New Task"
//                     variant="outlined"
//                     value={newTask}
//                     onChange={(e) => setNewTask(e.target.value)}
//                 />
//                 <Button variant="contained" color="primary" onClick={handleAddTask}>
//                     Add Task
//                 </Button>
//             </Box>
//             <TextField
//                 className="search-task"
//                 label="Search Tasks"
//                 variant="outlined"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//             />
//             <Box className="todo-list">
//                 {filteredTasks.map(task => (
//                     <Task
//                         key={task.id}
//                         task={task}
//                         toggleTaskCompletion={toggleTaskCompletion}
//                         updateTask={updateTask}
//                         deleteTask={deleteTask}
//                     />
//                 ))}
//             </Box>
//         </Box>
//     );
// };

// export default TodoList;

// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button } from '@mui/material';
// import Task from './Task';

// const TodoList = ({ tasks, addTask, updateTask, toggleTaskCompletion, deleteTask }) => {
//     const [newTask, setNewTask] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleAddTask = () => {
//         if (newTask.trim()) {
//             addTask({
//                 id: Date.now(),
//                 title: newTask,
//                 description: 'Task description goes here.',
//                 completed: false,
//                 updatedAt: new Date().toLocaleString(),
//             });
//             setNewTask('');
//         }
//     };

//     const filteredTasks = tasks.filter(task =>
//         task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//         const searchQuery = params.get('search');
//         if (searchQuery) {
//             setSearchTerm(searchQuery);
//         }
//     }, []);

//     return (
//         <Box>
//             <Box className="add-task">
//                 <TextField
//                     label="New Task"
//                     variant="outlined"
//                     value={newTask}
//                     onChange={(e) => setNewTask(e.target.value)}
//                 />
//                 <Button variant="contained" color="primary" onClick={handleAddTask}>
//                     Add Task
//                 </Button>
//             </Box>
//             <Box className="search-task">
//                 <TextField
//                     label="Search Tasks"
//                     variant="outlined"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//             </Box>
//             <Box className="todo-list">
//                 {filteredTasks.map(task => (
//                     <Task
//                         key={task.id}
//                         task={task}
//                         toggleTaskCompletion={toggleTaskCompletion}
//                         updateTask={updateTask}
//                         deleteTask={deleteTask}
//                     />
//                 ))}
//             </Box>
//         </Box>
//     );
// };

// export default TodoList;


// TodoList component to render the list of tasks and handle task operations
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import Task from './Task';

const TodoList = ({ tasks, addTask, updateTask, toggleTaskCompletion, deleteTask }) => {
    const [newTask, setNewTask] = useState(''); // State to manage new task input
    const [searchTerm, setSearchTerm] = useState(''); // State to manage search term

    // Function to add a new task
    const handleAddTask = () => {
        if (newTask.trim()) {
            addTask({
                id: Date.now(),
                title: newTask,
                description: 'Task description goes here.',
                completed: false,
                updatedAt: new Date().toLocaleString(),
            });
            setNewTask(''); // Clear the input field
        }
    };

    // Filter tasks based on search term
    const filteredTasks = tasks.filter(task =>
        task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Effect to set search term from URL query parameter
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const searchQuery = params.get('search');
        if (searchQuery) {
            setSearchTerm(searchQuery);
        }
    }, []);

    return (
        <Box>
            <Box className="add-task">
                <TextField
                    label="New Task"
                    variant="outlined"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleAddTask}>
                    Add Task
                </Button>
            </Box>
            <Box className="search-task">
                <TextField
                    label="Search Tasks"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Box>
            <Box className="todo-list">
                {filteredTasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        toggleTaskCompletion={toggleTaskCompletion}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default TodoList;


