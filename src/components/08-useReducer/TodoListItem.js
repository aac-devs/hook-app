import React from "react";

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
  const { id, desc, done } = todo;

  return (
    <li className="list-group-item">
      <p className={`${done && "complete"}`} onClick={() => handleToggle(id)}>
        {index + 1}. {desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};
