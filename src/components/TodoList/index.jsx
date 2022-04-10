import TodoItem from "../TodoItem";

import "./index.scss";

const TodoList = ({ visibleItems, handleDeleteItem, handleDoneItem }) => {
  return (
    <ul className="todo__list">
      {visibleItems.map((item) => (
        <TodoItem
          {...item}
          handleDeleteItem={handleDeleteItem}
          handleDoneItem={handleDoneItem}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
