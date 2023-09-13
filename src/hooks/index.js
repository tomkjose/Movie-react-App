import userLogin from "../api/index";
const useLogin = async (email, password) => {
  const token = await userLogin(email, password);
  console.log("token", token);
};
