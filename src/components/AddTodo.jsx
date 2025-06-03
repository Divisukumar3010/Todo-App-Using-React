import { useState } from 'react';
import { BiMessageAdd } from "react-icons/bi";
import styles from './AppTodo.module.css';
function AddTodo({ handleNewItem }) {

  const [todoname, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = () => {
    handleNewItem(todoname, dueDate);
    setDueDate('');
    setTodoName('');
  }

  return (
    <div className={`${styles['container']} container`}>
      <div className={`${styles['row']} row`}>
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" className={styles.input} value={todoname} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="time" className={styles.input} value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className={`${styles['CustomBtn']} btn btn-success`} onClick={handleAddButtonClicked}><BiMessageAdd /></ button>
        </div>
      </div>
    </div>
  )
}
export default AddTodo;