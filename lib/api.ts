import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/',
  headers: { 'Content-Type': 'application/json' },
});

// Example wrapper
export async function getProducts() {
  const res = await api.get('/api/products');
  return res.data;
}
