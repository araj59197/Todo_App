// import React, { useState } from 'react';
// import { Checkbox, IconButton, Typography, Box, TextField } from '@mui/material';
// import { Edit as EditIcon, Delete as DeleteIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';

// const Task = ({ task, toggleTaskCompletion, updateTask, deleteTask }) => {
//     const [expanded, setExpanded] = useState(false);
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedTask, setEditedTask] = useState({ ...task });

//     const handleToggleExpand = () => {
//         setExpanded(!expanded);
//     };

//     const handleEditClick = () => {
//         setIsEditing(true);
//     };

//     const handleSaveClick = () => {
//         updateTask(editedTask);
//         setIsEditing(false);
//     };

//     const handleCancelClick = () => {
//         setEditedTask({ ...task });
//         setIsEditing(false);
//     };

//     const handleInputChange = (e) => {
//         setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
//     };

//     return (
//         <Box
//             className="todo-item"
//             sx={{
//                 border: '1px solid rgba(255, 255, 255, 0.3)',
//                 borderRadius: '8px',
//                 padding: '10px',
//                 background: 'rgba(255, 255, 255, 0.2)',
//                 backdropFilter: 'blur(5px)',
//                 marginBottom: '10px'
//             }}
//         >
//             <Box display="flex" alignItems="center" onClick={handleToggleExpand} style={{ cursor: 'pointer' }}>
//                 <Checkbox
//                     checked={task.completed}
//                     onChange={() => toggleTaskCompletion(task.id)}
//                     color="primary"
//                 />
//                 {isEditing ? (
//                     <TextField
//                         name="title"
//                         value={editedTask.title}
//                         onChange={handleInputChange}
//                         variant="outlined"
//                         size="small"
//                         sx={{ flexGrow: 1, marginRight: 1 }}
//                     />
//                 ) : (
//                     <Typography
//                         variant="body1"
//                         className="task-text"
//                         style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
//                     >
//                         {task.title}
//                     </Typography>
//                 )}
//                 {isEditing ? (
//                     <>
//                         <IconButton onClick={handleSaveClick}><SaveIcon /></IconButton>
//                         <IconButton onClick={handleCancelClick}><CancelIcon /></IconButton>
//                     </>
//                 ) : (
//                     <>
//                         <IconButton onClick={handleEditClick}><EditIcon /></IconButton>
//                         <IconButton onClick={() => deleteTask(task.id)}><DeleteIcon /></IconButton>
//                     </>
//                 )}
//             </Box>
//             {expanded && (
//                 <Box
//                     sx={{
//                         marginTop: '10px',
//                         paddingLeft: '34px',
//                         borderLeft: '2px solid rgba(255, 255, 255, 0.3)'
//                     }}
//                 >
//                     {isEditing ? (
//                         <TextField
//                             name="description"
//                             value={editedTask.description}
//                             onChange={handleInputChange}
//                             variant="outlined"
//                             size="small"
//                             fullWidth
//                             multiline
//                             rows={2}
//                             sx={{ marginBottom: 1 }}
//                         />
//                     ) : (
//                         <Typography variant="body2" color="textSecondary">{task.description}</Typography>
//                     )}
//                     <Typography variant="caption" color="textSecondary">
//                         Last updated: {task.updatedAt}
//                     </Typography>
//                 </Box>
//             )}
//         </Box>
//     );
// };

// export default Task;


// Import necessary libraries and components
import React, { useState } from 'react';
import { Checkbox, IconButton, Typography, Box, TextField } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';

// Task component to render individual tasks
const Task = ({ task, toggleTaskCompletion, updateTask, deleteTask }) => {
    const [expanded, setExpanded] = useState(false); // State to manage task expansion
    const [isEditing, setIsEditing] = useState(false); // State to manage edit mode
    const [editedTask, setEditedTask] = useState({ ...task }); // State to manage the task being edited

    // Function to toggle task expansion
    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    // Function to start editing a task
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Function to save edited task
    const handleSaveClick = () => {
        updateTask(editedTask);
        setIsEditing(false);
    };

    // Function to cancel editing
    const handleCancelClick = () => {
        setEditedTask({ ...task });
        setIsEditing(false);
    };

    // Function to handle changes in task fields
    const handleInputChange = (e) => {
        setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
    };

    return (
        <Box
            className="todo-item"
            sx={{
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                padding: '10px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(5px)',
                marginBottom: '10px',
            }}
        >
            <Box display="flex" alignItems="center" onClick={handleToggleExpand} style={{ cursor: 'pointer' }}>
                <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    color="primary"
                />
                {isEditing ? (
                    <TextField
                        name="title"
                        value={editedTask.title}
                        onChange={handleInputChange}
                        variant="outlined"
                        size="small"
                        sx={{ flexGrow: 1, marginRight: 1 }}
                    />
                ) : (
                    <Typography
                        variant="body1"
                        className="task-text"
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    >
                        {task.title}
                    </Typography>
                )}
                {isEditing ? (
                    <>
                        <IconButton onClick={handleSaveClick}><SaveIcon /></IconButton>
                        <IconButton onClick={handleCancelClick}><CancelIcon /></IconButton>
                    </>
                ) : (
                    <>
                        <IconButton onClick={handleEditClick}><EditIcon /></IconButton>
                        <IconButton onClick={() => deleteTask(task.id)}><DeleteIcon /></IconButton>
                    </>
                )}
            </Box>
            {expanded && (
                <Box
                    sx={{
                        marginTop: '10px',
                        paddingLeft: '34px',
                        borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
                    }}
                >
                    {isEditing ? (
                        <TextField
                            name="description"
                            value={editedTask.description}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            fullWidth
                            multiline
                            rows={2}
                            sx={{ marginBottom: 1 }}
                        />
                    ) : (
                        <Typography variant="body2" color="textSecondary">{task.description}</Typography>
                    )}
                    <Typography variant="caption" color="textSecondary">
                        Last updated: {task.updatedAt}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Task;


