import axios from "axios";

export const nextServer = axios.create({
	baseURL: "https://car-rental-api.goit.study"
  // baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
  // withCredentials: true,
});