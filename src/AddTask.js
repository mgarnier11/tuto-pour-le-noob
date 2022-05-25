import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddTask({onClose, open}) {

  return (
    <Modal modalLable='Add Task'>
    
    </Modal>
  )
}

export default AddTask
