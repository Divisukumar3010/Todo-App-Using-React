import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

function TodoItems({ todoItems, handleDeleteItem }) {
  return (
    <div className={`${styles['items-container']} items-container`}>
      {todoItems.map((item) => (
        <TodoItem tododate={item.dueDate} handleDeleteItem={handleDeleteItem} key={item.name} todoname={item.name}></TodoItem>
      ))}

    </div>
  )
}
export default TodoItems;