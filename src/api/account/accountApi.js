import axios from "axios";

const URL = "http://localhost:8081";

export const AccountApi = {
    login,
    verify,
    unlock_account,
    forgot_password,
    register
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

export function forgot_password(usernameOrEmail) {
    return axios.post(`${URL}/forgot-password/${usernameOrEmail}`);
}

export function register(data) {
    return axios.post(`${URL}/sign-up`, data);
}
