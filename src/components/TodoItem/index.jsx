import classNames from "classnames";
import { useDispatch } from "react-redux";
import { deleteTodoFetchAction, editTodoFetchAction } from "../../redux/reducers/todos";

import "./index.scss";

const TodoItem = ({
  id,
  title,
  completed,
}) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteTodoFetchAction(id));
  };

  const handleComplitedItem = (id) => {
    dispatch(editTodoFetchAction({id, completed}));
  };

  return (
    <li className="todo__item item">
      <span
        href={id}
        className={classNames("item__name", {
          "item__name--done": completed,
        })}
      >
        {title}
      </span>
      <button onClick={() => handleComplitedItem(id, completed)} className="item__btn item__btn--done">
        done
      </button>
      <button onClick={() => handleDeleteItem(id)} className="item__btn item__btn--delete">
        del
      </button>
    </li>
  );
};

export default TodoItem;
