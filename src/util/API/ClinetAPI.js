import axios from "axios";

const apiURL = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

export const CreateUser = (data) => apiURL.post("auth/register", data);
export const Login = (data) => apiURL.post("auth/login", data);

//post
export const GetPost = () => apiURL.get("/posts");
export const CreatePost = (data) => apiURL.post("/posts", data)