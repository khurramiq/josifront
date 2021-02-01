import axios from "axios";
//export const baseUrl = "https://customer-repo.herokuapp.com"; //Must match the heroku url
export const baseUrl = "http://localhost:5000";
export default axios.create({
  baseURL: `${baseUrl}/api`
});
