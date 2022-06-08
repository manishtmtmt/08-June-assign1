import React from 'react'
import styles from "./todo.module.css"

const TodoList = ({ todo }) => {
  return (
    <div className={styles.todoList}>
      <input type="checkbox" />
      <p>{todo.value}</p>
    </div>
  )
}

export default TodoList