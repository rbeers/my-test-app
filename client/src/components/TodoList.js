import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', priority: 'medium' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '', priority: 'medium' });

  // Fetch todos from API
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/todos');
      setTodos(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Create new todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.title.trim()) return;

    try {
      const response = await axios.post('/api/todos', newTodo);
      setTodos([response.data.data, ...todos]);
      setNewTodo({ title: '', description: '', priority: 'medium' });
      setError(null);
    } catch (err) {
      setError('Failed to create todo');
      console.error('Error creating todo:', err);
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    try {
      const response = await axios.patch(`/api/todos/${id}/toggle`);
      setTodos(todos.map(todo => 
        todo._id === id ? response.data.data : todo
      ));
      setError(null);
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  // Update todo
  const updateTodo = async (id, updates) => {
    try {
      const response = await axios.put(`/api/todos/${id}`, updates);
      setTodos(todos.map(todo => 
        todo._id === id ? response.data.data : todo
      ));
      setError(null);
      setEditingId(null);
      setEditForm({ title: '', description: '', priority: 'medium' });
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  // Start editing a todo
  const startEditing = (todo) => {
    setEditingId(todo._id);
    setEditForm({
      title: todo.title,
      description: todo.description || '',
      priority: todo.priority
    });
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({ title: '', description: '', priority: 'medium' });
  };

  // Handle edit form submission
  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    if (!editForm.title.trim()) return;
    updateTodo(id, editForm);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#2ed573';
      default: return '#ffa502';
    }
  };

  if (loading) {
    return <div className="loading">Loading todos...</div>;
  }

  return (
    <div className="todo-container">
      <h2>📝 Todo List</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      {/* Add new todo form */}
      <form onSubmit={createTodo} className="todo-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTodo.title}
            onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
            className="todo-input"
            required
          />
          <select
            value={newTodo.priority}
            onChange={(e) => setNewTodo({...newTodo, priority: e.target.value})}
            className="priority-select"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit" className="add-btn">Add Todo</button>
        </div>
        <textarea
          placeholder="Description (optional)"
          value={newTodo.description}
          onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
          className="todo-description"
        />
      </form>

      {/* Todo list */}
      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            <p>No todos yet! Add one above to get started.</p>
          </div>
        ) : (
          todos.map(todo => (
            <div key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              {editingId === todo._id ? (
                // Edit mode
                <form onSubmit={(e) => handleEditSubmit(e, todo._id)} className="edit-form">
                  <div className="form-row">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                      className="todo-input"
                      required
                    />
                    <select
                      value={editForm.priority}
                      onChange={(e) => setEditForm({...editForm, priority: e.target.value})}
                      className="priority-select"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                    <button type="submit" className="save-btn">Save</button>
                    <button type="button" onClick={cancelEditing} className="cancel-btn">Cancel</button>
                  </div>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                    className="todo-description"
                    placeholder="Description (optional)"
                  />
                </form>
              ) : (
                // View mode
                <>
                  <div className="todo-content">
                    <div className="todo-header">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo._id)}
                        className="todo-checkbox"
                      />
                      <h3 className="todo-title">{todo.title}</h3>
                      <span 
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(todo.priority) }}
                      >
                        {todo.priority}
                      </span>
                    </div>
                    {todo.description && (
                      <p className="todo-description-text">{todo.description}</p>
                    )}
                    <div className="todo-meta">
                      <small>Created: {new Date(todo.createdAt).toLocaleDateString()}</small>
                      {todo.completed && (
                        <small>Completed: {new Date(todo.updatedAt).toLocaleDateString()}</small>
                      )}
                    </div>
                  </div>
                  <div className="todo-actions">
                    <button
                      onClick={() => startEditing(todo)}
                      className="edit-btn"
                      title="Edit todo"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => deleteTodo(todo._id)}
                      className="delete-btn"
                      title="Delete todo"
                    >
                      🗑️
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="todo-stats">
        <p>
          Total: {todos.length} | 
          Completed: {todos.filter(t => t.completed).length} | 
          Pending: {todos.filter(t => !t.completed).length}
        </p>
      </div>
    </div>
  );
};

export default TodoList; 