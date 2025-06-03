import styles from './TodoItem.module.css';
import { AiFillDelete } from "react-icons/ai";
function TodoItem({ todoname, tododate, handleDeleteItem }) {
  return (
    <div className="container">
      <div className={`${styles['row']} row`}>
        <div className="col-6">
          {todoname}
        </div>
        <div className="col-4">
          {tododate}
        </div>
        <div className="col-2">
          <button type="button" className={`${styles.CustomBtn} btn btn-danger`} onClick={() => handleDeleteItem(todoname)}><AiFillDelete /></button>
        </div>
      </div>
    </div>
  )
}
export default TodoItem;