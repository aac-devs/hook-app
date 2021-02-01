import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";
import { useForm } from "../../hooks/useForm";

describe("Pruebas con useForm", () => {
  const initialForm = {
    name: "Andrés",
    email: "aac@mail.com",
  };
  const otherForm = {
    name: "Pepe",
    email: "pepe@mail.com",
  };

  test("debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    act(() => {
      result.current[1]({
        target: {
          name: "name",
          value: "Juan Camilo",
        },
      });
    });
    expect(result.current[0]).toEqual({
      ...initialForm,
      name: "Juan Camilo",
    });
  });
  test("debe restablecer el formulario con reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "email",
          value: "juank@mail.com",
        },
      });
    });
    expect(result.current[0]).toEqual({
      ...initialForm,
      email: "juank@mail.com",
    });
    act(() => {
      reset();
    });
    expect(result.current[0]).toEqual(initialForm);
  });
});
