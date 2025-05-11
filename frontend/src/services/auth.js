import api from './api';

export const login = async (credentials) => {
  const response = await api.post('/api/auth/login', credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/api/auth/register', userData);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = async () => {
  await api.post('/api/auth/logout');
  localStorage.removeItem('token');
};

export const getMe = async () => {
  const response = await api.get('/api/auth/me');
  return response.data;
};