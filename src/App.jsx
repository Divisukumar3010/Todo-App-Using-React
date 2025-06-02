import { useState } from 'react';
import "./App.css";
import AppName from './components/AppName';
import AppTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoitems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoitems);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item =>item.name !== todoItemName)
    setTodoItems(newTodoItems);
  }
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo handleNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage todoItems={todoItems} ></WelcomeMessage>}
        <TodoItems handleDeleteItem={handleDeleteItem} todoItems={todoItems} />
      </center>
    </>
  )
}

export default App;
