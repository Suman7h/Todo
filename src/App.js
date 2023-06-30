import './style.css'
import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { ListTodo } from './ListTodo'

function App() {

  const [todos,setTodos]=useState(()=>{
    const localValue= localStorage.getItem('ITEMS')
    if(localValue==null) return []
    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem('ITEMS',JSON.stringify(todos))
  },[todos])

  function addTodo(title){
      setTodos((currentTodos)=>{
      return [...currentTodos,{id:crypto.randomUUID(),title,completed:false}]
    })
  }


  function toogleTodo(id, completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if (todo.id === id){
          return{...todo,completed}
        }
        return todo 
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{ 
      return currentTodos.filter(todo=> todo.id!==id )
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className='text-2xl mt-14 ml-7'>Todo List :</h1>
      <ListTodo todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
