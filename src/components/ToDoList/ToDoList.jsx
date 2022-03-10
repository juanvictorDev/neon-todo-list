import React,{useContext} from 'react';
import './style.scss';
import { Form } from '../Form/Form.jsx'
import { ToDos } from '../ToDos/ToDos.jsx';
import { Modal } from '../Modal/Modal';
import { Context } from '../../context/ToDoContext.js';



export function ToDoList() {
  const {modalStats} = useContext(Context);
  
  return(
    <main>
      <div className="container">
        <Form />
        <ToDos />
      </div>
      <div className="creditos">
        <h2>Feito por <a href="https://github.com/juanvictorDev" target="_blank">juanvictorDev</a>💖</h2>
      </div>
      {modalStats == true && <Modal />}
    </main>
  )
}