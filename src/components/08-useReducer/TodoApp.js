import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (newTodo) => {
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };

  const handleDelete = (todoId) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todoId,
    });
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todoId,
    });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};
