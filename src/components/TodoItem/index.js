// Write your code here
import './index.css'

const TodoItem = props => {
  const {listData, deleteTodo} = props
  const {title, id} = listData

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="item-container">
      <p className="desc"> {title} </p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        {' '}
        delete
      </button>
    </li>
  )
}

export default TodoItem
