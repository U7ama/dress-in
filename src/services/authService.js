import Api, { setToken } from "./Api";

export const logInUser = async (emailAndPassword) => {
  try {
    const res = await (await Api().post("/users/login", emailAndPassword)).data;
    console.log("token0", res.token);
    setToken(res.token); // Store the token
    const data = {
      user: res.data,
      token: res.token,
    };
    return data;
  } catch (error) {
    return {
      status: error.response.data.status,
      error: error.response.data.message,
    };
  }
};

export const signUpUser = async (credentials) => {
  try {
    const res = await (await Api().post("/users/signup", credentials)).data;
    Api(res.token);
    const data = {
      user: res.data,
      token: res.token,
    };
    return data;
  } catch (error) {
    return {
      status: error.response.data.status,
      error: error.response.data.message,
    };
  }
};
