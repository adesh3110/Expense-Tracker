import axiosInstance from "../helper/axios";

async function deleteCategory(id) {
  const path = `/v1/category/${id}`;
  const token = localStorage.getItem("token");

  const response = await axiosInstance.delete(path, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response);
}

async function deleteExpense(id) {
  const path = `/v1/expenses/${id}`;
  const token = localStorage.getItem("token");

  const response = await axiosInstance.delete(path, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response);
}

export { deleteCategory, deleteExpense };
