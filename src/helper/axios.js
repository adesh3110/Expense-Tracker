import axios from "axios";
import { refreshTokenApi } from "../services/auth_service";

const axiosInstance = axios.create({
  baseURL: "https://expense-tracker.nstack.in/",
});

// For 401 Status only [Purpose: Refresh Token and retry Only]
axiosInstance.interceptors.response.use(null, async (error) => {
  console.log("Response Error Interceptor Called");
  const config = error.config;

  const status = error.response?.status;
  if (status !== 401) return error;

  console.log("Interceptor is Refreshing Token");
  const refreshReposne = await refreshTokenApi();
  const { token, refreshToken } = refreshReposne.data;

  if (token && refreshReposne) {
    localStorage.setItem("token", token);
    localStorage.setItem("refresh-token", refreshToken);

    config.headers["Authorization"] = `Bearer ${token}`;
    const response = await axios(config);
    console.log("Interceptor retried last api call ", response.status);
    error.response = response;
  }

  return error;
});

export default axiosInstance;
