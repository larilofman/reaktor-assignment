import axios from 'axios';
import { apiUrl } from '../../data.json';

export const getProductsByCategory = async (category: string) => {
    console.log(`${apiUrl}/products/${category.toLowerCase()}`);
    const response = await axios.get(`${apiUrl}/products/${category.toLowerCase()}`, {
        headers: { 'Origin': 'https://warehouse-listing.herokuapp.com/' }
    });
    return response.data;
};