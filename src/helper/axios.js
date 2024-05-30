import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://expense-tracker.nstack.in/",
});

export default axiosInstance;
