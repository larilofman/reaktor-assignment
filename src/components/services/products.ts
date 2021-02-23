import axios from 'axios';
import { apiUrl, proxy } from '../../data.json';

export const getProductsByCategory = async (category: string) => {
    const response = await axios.get(`${proxy}/${apiUrl}/products/${category.toLowerCase()}`);
    return response.data;
};