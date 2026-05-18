import axios from "axios";

export const nextServer = axios.create({
	baseURL: "https://car-rental-api.goit.study"
});