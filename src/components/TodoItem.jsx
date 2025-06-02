import styles from './TodoItem.module.css';
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
          <button type="button" className="btn btn-danger CustomBtn" onClick={() => handleDeleteItem(todoname)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
export default TodoItem;