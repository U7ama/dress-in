import axios from "axios";

const DB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_URL
    : process.env.REACT_APP_DEV_URL;

const getToken = () => {
  return localStorage.getItem("token");
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

// Create a function that returns an Axios instance with default configuration
const createAxiosInstance = () => {
  const token = getToken();
  console.log("token", token);
  const api = axios.create({
    baseURL: "https://dress-in-api.vercel.app/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return api;
};

export { setToken }; // Export the setToken function

export const createOrder = async (url, id, email, orderItems, totalPrice) => {
  try {
    const api = createAxiosInstance(); // Create the Axios instance with the token
    const response = await api.post("/orders", {
      url,
      id,
      email,
      orderItems,
      totalPrice,
    });
    // Handle the response
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error(error);
  }
};

export const getUserOrders = async (id) => {
  try {
    const api = createAxiosInstance(); // Create the Axios instance with the token
    const response = await api.get(`/orders?userId=${id}`);
    // Handle the response
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error(error);
  }
};

export default createAxiosInstance;
