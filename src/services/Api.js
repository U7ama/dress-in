import axios from "axios";

const DB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_URL
    : process.env.REACT_APP_DEV_URL;

// eslint-disable-next-line import/no-anonymous-default-export
export default (token) =>
  axios.create({
    baseURL: "http://localhost:3000/api/v1",
    Authorization: `Bearer ${token}`,
  });
