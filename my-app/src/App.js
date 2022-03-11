import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

    filterHandler()
  }, [todos, status])

  
  return (
    <div>
      <section className='todoapp'>
        <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} />
        <Footer todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} setFilteredTodos={setFilteredTodos} status={status} setStatus={setStatus} />
      </section>
      
    </div>
  );
}

export default App;