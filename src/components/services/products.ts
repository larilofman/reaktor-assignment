import axios from 'axios';
import { apiUrl } from '../../data.json';

export const getProductsByCategory = async (category: string) => {
    const response = await axios.get(`${apiUrl}/products/${category.toLowerCase()}`);
    return response.data;
};