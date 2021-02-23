import axios from 'axios';
import { apiUrl } from '../../data.json';
import { config } from './availability';

export const getProductsByCategory = async (category: string) => {
    console.log(`${apiUrl}/products/${category.toLowerCase()}`);
    const response = await axios.get(`${apiUrl}/products/${category.toLowerCase()}`, config);
    return response.data;
};