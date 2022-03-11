import {createContext, useState} from 'react';

export const Context = createContext();

export function ContextProvider({children}) {

  const [todo, setTodo] = useState('');
  const [arrTodos, setArrTodos] = useState([]);
  const [modalStats, setModalStats] = useState(false);
  const [editedTodo, setEditedTodo] = useState('');
  const [todoId, setTodoId] = useState('');

  //Salvar Tarefa
  function inputTask(e) {
    setTodo(e.target.value);
  }
  
  //Enviar Tarefa
  function handleSubmit(e) {
    e.preventDefault();

    if(todo.length === 0){return};
    
    const add = {
      id: new Date().getTime(),
      text: todo,
      complete: false
    }

    setArrTodos([...arrTodos, add]);
    setTodo('')
  }

  //Deletar Tarefa
  function handleDelete(index) {
    const newArrTodos = [...arrTodos];
    newArrTodos.splice(index, 1);
    setArrTodos(newArrTodos);
  }
  
  //Completar Tarefa
  function handleUpdate(index) {
    const newArrTodos = [...arrTodos];
    newArrTodos[index].complete = !newArrTodos[index].complete;
    setArrTodos(newArrTodos);
  }

  //Abrir Modal
  function handleModal(id) {
    setModalStats(true);
    setTodoId(id);
  }

  //fechar modal pelo botão
  function handleCloseModal() {
    setModalStats(false);
  }

  //fechar modal cliclando fora 
  function outsideClick(e) {
    const id = 'modal-background';
    if (e.target.id === id) {
      setModalStats(false);
    }
  }

  //Salvar tarefa editada no estado
  function inputEditedTodo(e) {
    setEditedTodo(e.target.value);

  }
  // Atualizar Tarefa com o novo estado
  function handleEditSubmit(e) {
    e.preventDefault();
    let newArrTodos = [...arrTodos]
    newArrTodos.map((task) => {
      if(task.id === todoId){
        task.text = editedTodo;
      }
      return task;
    })
    setArrTodos(newArrTodos);
    setTodoId("");
    setEditedTodo("");
    setModalStats(false);

  }


  return(
    <Context.Provider value = {{todo,arrTodos,inputTask,handleSubmit,handleDelete,handleUpdate,handleModal, modalStats,handleCloseModal,outsideClick,inputEditedTodo,editedTodo,handleEditSubmit}}>
      {children}
    </Context.Provider>
  );
}