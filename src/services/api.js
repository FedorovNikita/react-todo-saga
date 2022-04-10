import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const todoAPI = {
  async getTodoes() {
    const res = await instance.get("todos?_limit=10");
    return await res.data;
  },
  async editTodo(id, completed) {
    const res = await instance.put(`todos/${id}`, {
      completed: !completed,
    });
    return await res.data;
  },
  async deleteTodo(id) {
    const res = await instance.delete(`todos/${id}`);
    return await res.data;
  },
  async addTodo(data) {
    const res = await instance.post(`todos`, {
      ...data
    });
    return await res.data;
  },
};