import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://expense-tracker.nstack.in/",
});

// axiosInstance.interceptors.response.use(null, (err) => {
//   const response = err.response;
//   if (response.status == 401) {
//     localStorage.removeItem("token");
//   }

//   return err;
// });

export default axiosInstance;
