import axiosInstance from "../helper/axios";

async function loginHandler(payload) {
  const path = "v1/auth/login";
  try {
    const response = await axiosInstance.post(path, payload);
    return response?.data;
  } catch (err) {
    console.log(err);
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

async function me(payload) {
  const path = "v1/auth/me";
  try {
    const token = localStorage.getItem("token");
    if (token == null) return null;
    const response = await axiosInstance.get(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (err) {
    console.log(err);
  }
}

export { loginHandler, registerHandler, me };
