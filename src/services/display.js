import axiosInstance from "../helper/axios";

async function getAllCategory() {
  const path = "/v1/category?limit=10&page=1";
  const token = localStorage.getItem("token");

  const response = await axiosInstance.get(path, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response);
  const categories = response?.["data"]["items"];
  console.log(categories);
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

  console.log(response);
  const expenses = response?.["data"]["items"];
  console.log(expenses);
  return expenses;
}

export { getAllCategory, getAllExpense };
