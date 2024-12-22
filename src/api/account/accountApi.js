import axios from "axios";

const URL = "http://localhost:8080";

export const AccountApi = {
    login,
}

export function login(data) {
    return axios.post(`${URL}/sign-in`, data);
}
