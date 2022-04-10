import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddItemForm from "./components/AddItemForm";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import { getTodos } from "./redux/reducers/todos";
import Loader from "./components/Loader";

import "./assets/styles/index.scss";

function App() {
  const { todos } = useSelector((state) => state.todos);
  const [searchTodo, setSearchTodo] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTodo(e.target.value);
  };

  const search = (todos, term) => {
    if (term.length === 0) {
      return todos;
    }

    return todos.filter(
      (todo) => todo.title.toUpperCase().indexOf(term.toUpperCase()) > -1
    );
  };

  const visibleItems = search(todos, searchTodo);

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container todo">
      <section className="todo__wrap">
        <Search searchTodo={searchTodo} handleSearch={handleSearch} />
        <TodoList visibleItems={visibleItems} />
        <AddItemForm />
      </section>
    </div>
  );
}

export default App;
