import axiosInstance from "../helper/axios";

async function createExpense(payload) {
  const token = localStorage.getItem("token");
  if (token == null) return;

  const path = "v1/expenses";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.post(path, payload, {
      headers: headers,
    });
    return response?.data;
  } catch (error) {}
}

async function createCategory(payload) {
  const path = "v1/category";
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.post(path, payload, {
      headers: headers,
    });
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

async function updateCategory(id, payload) {
  const path = `v1/category/${id}`;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.put(path, payload, {
      headers: headers,
    });
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

export { createExpense, createCategory, updateCategory };
