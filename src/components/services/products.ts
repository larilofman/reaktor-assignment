import axios from 'axios';
import { apiUrl, proxy } from '../../config';

export const getProductsByCategory = async (category: string) => {
    const response = await axios.get(`${proxy}/${apiUrl}/products/${category.toLowerCase()}`);
    return response.data;
};