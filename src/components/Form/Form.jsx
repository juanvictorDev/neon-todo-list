import React,{useContext} from 'react';
import { Context } from '../../context/ToDoContext';
import './style.scss';

export function Form() {
  
  const {inputTask,handleSubmit,todo} = useContext(Context);
  
  
  return(
    <form className = "form-principal" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        placeholder="Digite Aqui"
        onChange={inputTask}
        value={todo}
      />
      <button 
        type="submit" 
        className="submit">
          adicionar
      </button>
    </form>
  )
};