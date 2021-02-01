import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test("debe agregar un TODO", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender Express",
      done: false,
    };
    const state = todoReducer(demoTodos, {
      type: "ADD_TODO",
      payload: newTodo,
    });
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });
  test("debe borrar un TODO", () => {
    const todoId = 1;
    const state = todoReducer(demoTodos, {
      type: "DELETE_TODO",
      payload: todoId,
    });
    expect(state.length).toBe(1);
    expect(state).toEqual(demoTodos.filter((todo) => todo.id !== todoId));
    // expect(state).toEqual([demoTodos[1]]);
  });
  test("debe hacer el Toggle del TODO", () => {
    const todoId = 1;
    const state = todoReducer(demoTodos, {
      type: "TOGGLE_TODO",
      payload: todoId,
    });
    const demoDone = demoTodos.find((todo) => todo.id === todoId).done;
    const stateDone = state.find((todo) => todo.id === todoId).done;
    expect(stateDone).toBe(!demoDone);
    // expect(state[0].done).toBe(true);
    // expect(state[1]).toEqual(demoTodos[1]);
  });
});
