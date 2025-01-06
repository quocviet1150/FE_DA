import axios from "axios";

const URL = "http://localhost:8081/categories";

export const CategoryApi = {
    getAllCategory,
}

export function getAllCategory(token, params) {
    debugger
    return axios.get(
        `${URL}/getAllCategory`,
        {
            params: params,
            headers: {
                headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWV0bnEiLCJpYXQiOjE3MzYxNTY3NDYsImV4cCI6MTczNjE5Mjc0Niwicm9sZSI6IlJPTEVfQURNSU4ifQ.TCBWnszwdUMNn8WPCI_Cu4Wq4sgQ_tlpqpQiXuf73kk" },
            }
        }
    );
}
