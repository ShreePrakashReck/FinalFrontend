// const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_URL = "https://node-js-app-kappa.vercel.app/api/v1";

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/register",
  LOGIN_API: BASE_URL + "/login",
  FORGET_API: BASE_URL + "/forgetPassword",
};
