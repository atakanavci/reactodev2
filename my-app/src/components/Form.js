import React from 'react'

function Form({ inputText, setInputText, todos, setTodos }) {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      if(e.target.value !== '' && !(todos.includes(inputText))) {
        setTodos([
          ...todos, { text: inputText, completed: false, id: Math.random()*1000 }
        ])
        console.log(todos)
        setInputText('')
      } else {
        alert('Boş geçemezsiniz!')
        setInputText('') 
      }
      
    }
  }

  return (
    <>
      <header className='header'>
        <h1>todos</h1>
        <form onKeyPress={submitTodoHandler}>
          <input className='new-todo' value={inputText} placeholder='What needs to be done?' onChange={inputTextHandler} autoFocus/>
          <label htmlFor="toggle-all" mv-action = 'set(done,!toggleAll)' >
				</label>
        </form>
      </header>
    </>
  )
}

export default Form