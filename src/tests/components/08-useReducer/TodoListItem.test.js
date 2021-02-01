import React from "react";
const { shallow } = require("enzyme");
const {
  TodoListItem,
} = require("../../../components/08-useReducer/TodoListItem");
const { demoTodos } = require("../../fixtures/demoTodos");

describe("Pruebas en <TodoListItem />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const index = 0;

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[index]}
      index={index}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar a la función handleDelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[index].id);
  });

  test("debe llamar a la función handleToggle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[index].id);
  });

  test("debe mostrar el texto correctamente", () => {
    const text = `${index + 1}. ${demoTodos[index].desc}`;
    const p = wrapper.find("p").text().trim();
    expect(p).toBe(text);
  });

  test('debe tener la clase "complete" si el TODO.done = true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem todo={todo} />);
    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
