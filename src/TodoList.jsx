import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return(
    <ul className="list">
      {todos.length === 0 && "Add some tasks to be productive"}
      {todos.map(todo => {
        return(
         <TodoItem 
          {...todo} 
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
         />
        )
      })}
   </ul>
  )
}