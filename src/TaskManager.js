import './taskManager.css'
import Task from './Task'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import AddTask from './AddTask'

function TaskManager() {
  return (
    <div className='taskManager'>
      <header>Task Manager</header>
      <div className='taskManager__container'>
        
      </div>
    </div>
  )
}

export default TaskManager
