import './task.css'
import {useState} from 'react'
import TaskItem from './TaskItem'
import EditTask from './EditTask'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from './firebase'

function Task({id, title, description, completed}) {
  return (
    <div className={`task ${/*checked && 'task--borderColor'*/'patate'}`}>

    </div>
  )
}

export default Task