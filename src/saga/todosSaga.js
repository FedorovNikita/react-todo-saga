import { put, takeEvery, call } from "redux-saga/effects";
import {
  constants,
  editTodoAction,
  setTodos,
  deleteTodoAction,
  addTodoAction,
  setLoading,
} from "../redux/reducers/todos";
import { todoAPI } from "../services/api";

function* fetchTodosWorker() {
  yield put(setLoading(true));
  const data = yield call(todoAPI.getTodoes);
  yield put(setTodos(data));
  yield put(setLoading(false));
}

function* fetchEditTodoWorker({ payload }) {
  const { id, completed } = payload;
  try {
    const data = yield todoAPI.editTodo(id, completed);
    yield put(editTodoAction({ ...data }));
  } catch (err) {
    console.log(err);
  }
}

function* fetchDeleteTodoWorker({ id }) {
  yield todoAPI.deleteTodo(id);
  yield put(deleteTodoAction(id));
}

function* fetchAddTodoWorker({ data }) {
  const res = yield todoAPI.addTodo(data);
  yield put(addTodoAction(res));
}

export function* todosWatcher() {
  yield takeEvery(constants.GET_TODOS, fetchTodosWorker);
  yield takeEvery(constants.EDIT_TODO_FETCH, fetchEditTodoWorker);
  yield takeEvery(constants.DELETE_TODO_FETCH, fetchDeleteTodoWorker);
  yield takeEvery(constants.ADD_TODO_FETCH, fetchAddTodoWorker);
}
