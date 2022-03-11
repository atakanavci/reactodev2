import React from 'react';

function Todo({text,todo,todos,setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                  };
                }
                return item
              }))
            }
            return (
              <li className={`${todo.completed ? 'completed' : ''}`}>
                <div>
                  <input className='toggle' type='checkbox' onChange={completeHandler}/>
                  <label>{text}</label>
                  <button onClick={deleteHandler} className='destroy'></button>
                </div>
              </li>
            )
          }
          
          export default Todo;
            
        
    
