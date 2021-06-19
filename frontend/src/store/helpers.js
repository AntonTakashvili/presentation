import axios from "axios";

export const fetchAllData = () => {
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:8080/todo/getAll", {
    token: `Bearer ${token}`,
  });
};

export const addData = (data) => {
  return axios.post("http://localhost:8080/todo/add", { ...data });
};

export const deleteItem = (id) => {
  const token = localStorage.getItem("token");
  return axios.delete(`http://localhost:8080/todo/delete_${id}`, {
    data: { token: `Bearer ${token}` },
  });
};

export const editItem = (id, editedText) => {
  const token = localStorage.getItem("token");
  return axios.put(`http://localhost:8080/todo/edit_${id}`, {
    editedText,
    token: `Bearer ${token}`,
  });
};

export const toggleItemCompleted = (data) =>
  axios.put(`http://localhost:8080/todo/toggleCompleted_${data.id}`, {
    ...data,
  });

export const selectAllItems = () => {
  const token = localStorage.getItem("token");
  return axios.put(`http://localhost:8080/todo/selectAll`, {
    token: `Bearer ${token}`,
  });
};

export const unSelectAllItems = () => {
  const token = localStorage.getItem("token");
  return axios.put(`http://localhost:8080/todo/unSelectAll`, {
    token: `Bearer ${token}`,
  });
};

export const deleteSelectedItems = () => {
  const token = localStorage.getItem("token");
  return axios.post(`http://localhost:8080/todo/deleteSelected`, {
    token: `Bearer ${token}`,
  });
};

export const registerUser = (email, password) =>
  axios.post("http://localhost:8080/user/register", { email, password });

export const loginUser = (email, password) =>
  axios.post("http://localhost:8080/user/login", { email, password });

export const checkAuth = () => {
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:8080/checkAuth", {
    token: `Bearer ${token}`,
  });
};
