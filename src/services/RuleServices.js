import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/v1/rules';  // Base API URL
// http://localhost:5001/api/rules/create

// Create a new rule
export const createRule = async (ruleData) => {
    return await axios.post(`http://localhost:5001/api/rules/create`, ruleData);
};

// Combine multiple rules
export const combineRules = (rules) => {
    return axios.post(`http://localhost:5001/api/rules/combine`, { rules });
};

// Evaluate the combined rule
export const evaluateRule = (data) => {
    return axios.post(`http://localhost:5001/api/rules/evaluate`, data);  // Pass data and combined rule for evaluation
};
