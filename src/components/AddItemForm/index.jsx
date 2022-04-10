import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoFetchAction } from "../../redux/reducers/todos";
import "./index.scss";

const AddItemForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const handleSumbitAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todoInput,
      completed: false,
    };
    dispatch(addTodoFetchAction(newTodo));
    setTodoInput("");
  };

  return (
    <form onSubmit={handleSumbitAddTodo} className="todo__form">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Название задачи"
        className="input form__input"
      />
      <button className="btn form__btn">Добавить</button>
    </form>
  );
};

export default AddItemForm;
