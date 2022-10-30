import axios from "axios";

const apiURL = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

export const CreateUser = (data) => apiURL.post("auth/register", data);
export const Login = (data) => apiURL.post("auth/login", data);

//users
export const getUserData = (userId) => apiURL.get(`users/find/${userId}`);


//post
export const GetPost = () => apiURL.get("/posts");
export const CreatePost = (data) => apiURL.post("/posts", data)


//comments

export const GetComments = (postId) => apiURL.get(`/comments?postId=${postId}`);
export const AddComment = (data) => apiURL.post(`/comments`, data);

//likes

export const GetLikes = (postId) => apiURL.get(`/likes?postId=${postId}`);
export const addLikes = (postId) => apiURL.post(`/likes`, postId);
export const deleteLikes = (postId) => apiURL.delete(`/likes?postId=${postId}`);


//relationship

export const GetRelationship = (userId) =>
    apiURL.get(`/relationship?followerUserId=${userId}`);
export const addRelationship = (userId) => apiURL.post(`/relationship`, userId);
export const deleteRelationship = (userId) =>
    apiURL.delete(`/relationship?userId=${userId}`);