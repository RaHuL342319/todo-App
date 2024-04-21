import './App.css'
import React from'react'
import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  return(
    <div className="App">
      <Header />
      <FormTodo />
      <TodoList />
    </div>
  )
}

export default App
