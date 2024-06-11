import axios from "axios";

const instanceAxios = () =>
  axios.create({
    baseURL: "http://localhost:9876/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    },
  });

export const login = async (email, password) => {
  const reqBody = { email, password };
  const result = await instanceAxios().post("api/user/login", reqBody);
  return result;
};

export const signup = async (email, password, role, fname, lname) => {
  const reqBody = { email, password, role, fname, lname };
  console.log(reqBody,"request");
  const result = await instanceAxios().post("/api/user/signup", reqBody);
  return result;
};

export const getUsers = async () => await instanceAxios().get("/api/user/");

export const findUser = async (userId) =>
  await instanceAxios().get(`api/user/${userId}`);

export const deleteUser = async (userId) =>
  await instanceAxios().delete(`api/user/${userId}`);
