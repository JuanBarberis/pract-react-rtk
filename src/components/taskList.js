import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

export default function TaskList() {
    const task = useSelector(state => state.task)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    
    }
    return (
        <div className=' w-4/6  '>
            <header className='flex justify-evenly  items-center py-4'>
                <h1>Task {task.length}</h1>
                <Link to='/create' className='bg-fuchsia-600 px-2 py-1 rounded-md'>create task</Link>
            </header>
            <div className='flex flex-wrap  gap-4 justify-center'>
                {
                    task.map(e => (
                        <div key={e.id} className='flex flex-col items-center bg-fuchsia-100 text-red-600 rounded-md p-4 w-1/2 gap-2'>
                            <header className='flex justify-between'>
                            <h3>{e.title}</h3>
                            </header>
                            <p>{e.description}</p>
                            <div className='flex gap-x-2'>
                            <Link to={`/edit/${e.id}`} className='bg-zinc-500 text-xs text-white rounded-md px-2 py-1 self-center'>Edit</Link>
                            <button className='bg-red-500 text-white text-xs rounded-md px-2 py-1 self-center' onClick={() => handleDelete(e.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
