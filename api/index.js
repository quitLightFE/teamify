import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:3000/api" });

// /Dashboard teams data
export const getDashboardData = () => api.get();

// /Teams teams data
export const getDataTeams = () => api.get("teams");

export const getMembersData = (id) => api.get(`teams/${id}`);
