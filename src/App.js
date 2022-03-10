import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header.jsx';
import { ToDoList } from './components/ToDoList/ToDoList.jsx';
import { ContextProvider } from './context/ToDoContext.js'

function App() {  
  return(
    <ContextProvider>
      <div className="App">
        <Header />
        <ToDoList />
      </div>
    </ContextProvider >
  );
}
export default App;
