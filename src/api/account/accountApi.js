import axios from "axios";

const URL = "http://localhost:8080";

export const AccountApi = {
    login,
    verify,
    unlock_account
}

export function login(data) {
    return axios.post(`${URL}/sign-in`, data);
}

export function verify(data) {
    return axios.post(`${URL}/verify-code`, data);
}

export function unlock_account(usernameOrEmail) {
    return axios.post(`${URL}/unlock-account/${usernameOrEmail}`);
}
