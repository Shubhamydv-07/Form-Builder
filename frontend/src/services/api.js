import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createForm = (data) => API.post('/api/forms', data);
export const getForm = (id) => API.get(`/api/forms/${id}`);
export const submitResponse = (id, data) => API.post(`/api/forms/${id}/responses`, data);