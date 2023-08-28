import axios from "axios";

const URL = "https://chattingapp-server.onrender.com/";

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${URL}/add`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser api", error);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${URL}/users`);

    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers api", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation API", error);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation API", error);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newMessage Api", error);
  }
};

export const getMessage = async (id) => {
  try {
    let response = await axios.get(`${URL}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getMessage Api", error);
  }
};
