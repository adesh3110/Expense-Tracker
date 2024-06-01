import axiosInstance from "../helper/axios";

async function getCategoryById(id) {
  const path = `/v1/category/${id}`;
  const token = localStorage.getItem("token");

  const response = await axiosInstance.get(path, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const category = response?.["data"]["data"];
  return category;
}

async function getAllCategory(page) {
  const path = "/v1/category";
  const token = localStorage.getItem("token");

  const response = await axiosInstance.get(path, {
    params: {
      limit: 10,
      page: page,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const categories = response?.["data"]["items"];
  return categories;
}

async function getAllExpense() {
  const path = "/v1/expenses?limit=10&page=1";
  const token = localStorage.getItem("token");

  const response = await axiosInstance.get(path, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const expenses = response?.["data"]["items"];
  return expenses;
}

export { getAllCategory, getAllExpense, getCategoryById };
