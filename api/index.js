import axios from "axios";
const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

// /Dashboard teams data
export const getDashboardData = () => api.get();

// /Teams teams data
export const getDataTeams = () => api.get("/teams");

export const getMembersData = (id) => api.get(`/teams/${id}`);
