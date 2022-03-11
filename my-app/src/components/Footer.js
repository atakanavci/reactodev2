import React from "react";

function Footer({todos,setTodos,filteredTodos,setFilteredTodos,status,setStatus}) {
    const statusHandler = (e) => {
        setStatus(e.target.id)
    }
    const itemsLeft = filteredTodos.filter((item) => item.completed === false).length

    const removeHandler = () => {
        setTodos(todos.filter((item) => item.completed === false))
    }

    return (
        <footer className="footer">
        <span className="todo-count">
        <strong>{itemsLeft}</strong>
        &nbsp;items left
        </span>

        <ul className="filters">
         <li>
             <a href ='/#' onClick={statusHandler} className = {`${status === 'all' ? 'selected' : ''}`} id= 'all'>All</a>
         </li>

         <li>
         <a href = '/#' onClick={statusHandler} className =  {`${status === 'active' ? 'selected' : ''}`} id= 'active'>Active</a>
         </li>

         <li>
             <a href="/#" onClick={statusHandler} className = {`${status === 'completed' ? 'selected' : ''}`} id= 'completed'>Completed</a>
         </li>

        </ul>

        <button onClick={removeHandler} type = 'submit' className="clear-completed">
         Clear completed

        </button>



        </footer>
    )
}

export default Footer;