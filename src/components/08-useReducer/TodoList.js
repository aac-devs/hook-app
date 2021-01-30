import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos &&
        todos.map((todo, index) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            index={index}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
    </ul>
  );
};
