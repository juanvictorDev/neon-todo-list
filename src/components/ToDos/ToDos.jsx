import React,{useContext} from 'react';
import { Context } from '../../context/ToDoContext';
import {RiDeleteBin5Line, RiCheckboxCircleLine} from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
import './style.scss';

export function ToDos() {
  
  const {arrTodos,handleDelete,handleUpdate, handleModal} = useContext(Context);

  return (
    <div className="todos-container">
      {arrTodos.map((task,index) => (
        <div key={task.id} className={`${task.complete ? "todo-container todo-container-complete" : "todo-container"}`}>
          <h2 className="text">{task.text}</h2>
          
          <div className='buttons-container'>
            <button className='btn complete' onClick={() => handleUpdate(index)}>
              <RiCheckboxCircleLine/>
            </button>
            <button className='btn delete' onClick={() => handleDelete(index)}>
              <RiDeleteBin5Line/>
            </button>
            <button className='btn edit' onClick={() => handleModal(task.id)}>
              <BiEdit/>
            </button>
          </div>
        </div>
      ))}
      
      {arrTodos == 0 && (
        <div className = 'empty'>
          <h2>Não Existem Tarefas ¯\_(ツ)_/¯</h2>
        </div>
      )}
    </div>
  );
}