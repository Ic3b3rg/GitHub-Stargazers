import axios from "axios";
import { OwnerRepoResponse, StargazersUser } from "../types/apiService";

axios.interceptors.request.use(function (config) {
    config.headers.Authorization = process.env.AUTH_TOKEN;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export const apiService = {
    getUserProfile: async (userName: string = "github", repo: string = 'docs') => {
        const response = await axios.get<OwnerRepoResponse>(`https://api.github.com/repos/${userName}/${repo}`,)
        return response.data;
    },
    getStargazer: async (userName: string = "github", repo: string = 'docs') => {
        const response = await axios.get<StargazersUser[]>(`https://api.github.com/repos/${userName}/${repo}/stargazers`,)
        return response.data;

    },
}