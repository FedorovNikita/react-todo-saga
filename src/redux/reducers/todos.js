const initialState = {
  isLoading: false,
  todos: [
    {
      userId: 1,
      id: 1,
      title: "Доделать todo",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "Подключить демостенд",
      completed: false,
    },
  ],
};

export const constants = {
  ADD_TODO: "ADD_TODO",
  ADD_TODO_FETCH: "ADD_TODO_FETCH",
  DELETE_TODO: "DELETE_TODO",
  DELETE_TODO_FETCH: "DELETE_TODO_FETCH",
  EDIT_TODO: "EDIT_TODO",
  EDIT_TODO_FETCH: "EDIT_TODO_FETCH",
  GET_TODOS: "GET_TODOS",
  SET_TODOS: "SET_TODOS",
  CHANGE_LOADING: "CHANGE_LOADING",
};

const todos = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case constants.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case constants.EDIT_TODO: {
      const idx = state.todos.findIndex((todo) => todo.id === payload.id);

      const editedTodo = {
        ...state.todos[idx],
        completed: payload.completed,
      };

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, idx),
          editedTodo,
          ...state.todos.slice(idx + 1),
        ],
      };
    }
    case constants.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case constants.SET_TODOS:
      return { ...state, todos: payload };
    case constants.CHANGE_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};

export const addTodoAction = (payload) => ({
  type: constants.ADD_TODO,
  payload,
});

export const addTodoFetchAction = (data) => ({
  type: constants.ADD_TODO_FETCH,
  data,
});

export const editTodoAction = (payload) => ({
  type: constants.EDIT_TODO,
  payload,
});

export const editTodoFetchAction = (payload) => ({
  type: constants.EDIT_TODO_FETCH,
  payload,
});

export const deleteTodoAction = (payload) => ({
  type: constants.DELETE_TODO,
  payload,
});

export const deleteTodoFetchAction = (id) => ({
  type: constants.DELETE_TODO_FETCH,
  id,
});

export const setTodos = (payload) => ({
  type: constants.SET_TODOS,
  payload,
});

export const getTodos = () => ({ type: constants.GET_TODOS });

export const setLoading = (payload) => ({
  type: constants.CHANGE_LOADING,
  payload,
});

export default todos;
