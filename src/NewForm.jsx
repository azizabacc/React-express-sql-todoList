import React, { useState } from 'react'
import axios from 'axios'

export  const NewForm = () => {

    const [task, setTask] = useState('')
    const handleSubmit =  async(e) =>{
        e.preventDefault()
        //MAKE THE POST REQUEST HERE or in App.jsx
        try {
            const result = await axios.post('/api/tasks/add', {task} )
            console.log(result.data);
             // reset input field
             setTask("");
        } catch (error) {
            console.error("Error:", error);
        }

    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="text">TASK</label>
        <input type="text" id='text' value={task} onChange={e=> setTask(e.target.value)} />
        <button type='submit'>ADD TASK</button>
    </form>
  )
}
