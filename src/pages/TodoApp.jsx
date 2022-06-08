import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";
import TodoList from "./TodoList";
import styles from "./todo.module.css";

const TodoApp = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addNew = () => {
    let value = ref.current.value;
    dispatch(
      addTodo({
        value: value,
        isCompleted: false,
      })
    );
    ref.current.value = null;
  };
  return (
    <div>
      <div className={styles.center_div}>
        <div>
          <input ref={ref} type="text" name="" id="" placeholder="Add a todo" />
          <button onClick={addNew}>Add</button>
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoList todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
