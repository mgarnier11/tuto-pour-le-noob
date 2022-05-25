import Modal from "./Modal"
import {useState} from 'react'
import './editTask.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './firebase'

function EditTask({open, onClose, toEditTitle, toEditDescription, id}) {

  return (
    <Modal modalLable='Edit Task' >
      
    </Modal>
  )
}

export default EditTask
