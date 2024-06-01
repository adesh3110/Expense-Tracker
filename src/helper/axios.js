import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://expense-tracker.nstack.in/",
});

axiosInstance.interceptors.response.use(null, (err) => {
  const response = err.response;
  const url = window.location.href;
  if (response.status === 401 && url != "/") {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return err;
});

export default axiosInstance;
