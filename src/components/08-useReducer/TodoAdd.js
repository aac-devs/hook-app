import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === "") {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAdd(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add To-Do</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          autoComplete="off"
          name="description"
          placeholder="To-do description.."
          value={description}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-success mt-2 btn-block">
          Add
        </button>
      </form>
    </>
  );
};
