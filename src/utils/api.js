import axios from "axios";
// export const baseUrl = "http://localhost:5000";
export const baseUrl = "https://josibackend.herokuapp.com";
export default axios.create({
  baseURL: `${baseUrl}/api`
});
