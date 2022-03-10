import React,{useContext} from 'react';
import './style.scss'
import {MdExitToApp} from 'react-icons/md';
import { Context } from '../../context/ToDoContext';

export function Modal() {
  const {handleCloseModal,outsideClick,inputEditedTodo,editedTodo,handleEditSubmit} = useContext(Context);
  
  return(
    <div className="background-modal" id='modal-background' onClick={outsideClick}>
      
        <div className="container-modal">
          
          <div className="modal-header">
            <h2>Deseja Editar a Tarefa ?</h2>
            <button className="exit-modal" onClick ={handleCloseModal}>
              <MdExitToApp/>
            </button>
          </div>
      
          <form className="form-modal" onSubmit={handleEditSubmit}>
            <input 
              type="text" 
              className="input-modal"  
              placeholder="Digite aqui"
              onChange={inputEditedTodo}
              value={editedTodo}
            />
            <button className="btn-modal">editar</button>
          </form>
        
      </div>
    </div>
  )
}