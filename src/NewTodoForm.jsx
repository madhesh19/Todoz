import { useState } from "react"

export function NewTodoForm({onSubmit}) {
  const [newTask, setnewTask] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    
    onSubmit(newTask)
    setnewTask('')
  }

  return(
    <form
     onSubmit={handleSubmit} 
     className="new-item-form"
    >
      <div className="form-row">
        <label htmlFor="item">New Tasks</label>
        <input 
          value={newTask} 
          onChange={e => setnewTask(e.target.value)} type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}