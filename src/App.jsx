import { useEffect, useState } from "react"
import "./style.css"
import { TodoList } from "./TodoList"
import { NewTodoForm } from "./NewTodoForm"

export default function App() {
 
  const [todos, setTodos] = useState(() => {
    const localvalue = localStorage.getItem("Tasks")
    if(localvalue == null) return []

    return JSON.parse(localvalue)
  })

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return[
        ...currentTodos, 
        { id: crypto.randomUUID(),  title, completed:false }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todos => {
        if (todos.id === id) {
          return{...todos, completed}
        }
  
        return todos
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return(
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
    
  )
}