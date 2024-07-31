// Main App component for managing state and routing
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import TodoList from './components/TodoList';
import dummyData from './dummydata.json';
import './style.css';

const App = () => {
  const [tasks, setTasks] = useState(dummyData); // State to manage tasks

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to update an existing task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Retrieve the current search term from the URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container className="container bubble" maxWidth="sm">
        <Typography variant="h3" gutterBottom align="center">Todo List</Typography>
        <Routes>
          <Route path="/" element={
            <TodoList
              tasks={tasks}
              addTask={addTask}
              updateTask={updateTask}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          } />
        </Routes>
      </Container>
    </Box>
  );
};

const AppWrapper = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
);

export default AppWrapper;






