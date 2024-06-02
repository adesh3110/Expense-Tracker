import axios from "axios";
import axiosInstance from "../helper/axios";

async function loginHandler(payload) {
  const path = "v1/auth/login";
  try {
    const response = await axiosInstance.post(path, payload);
    return response?.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function registerHandler(payload) {
  const path = "v1/auth/register";
  try {
    const response = await axiosInstance.post(path, payload);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

async function me() {
  const path = "v1/auth/me";
  const token = localStorage.getItem("token");
  if (token == null) return null;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axiosInstance.get(path, {
      headers: headers,
    });
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

async function refreshTokenApi() {
  const path = "https://expense-tracker.nstack.in/v1/auth/refreshToken";
  const refreshToken = localStorage.getItem("refresh-token");
  const headers = {
    "refresh-token": refreshToken,
  };
  try {
    const response = await axios.get(path, { headers });
    return response?.data;
  } catch (err) {
    // window.location.href = "/";
    console.log(err);
    return err;
  }
}

export { loginHandler, registerHandler, refreshTokenApi, me };
