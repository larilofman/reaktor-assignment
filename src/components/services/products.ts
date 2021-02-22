import axios from 'axios';

export const getProductsByCategory = async (category: string) => {
    const response = await axios.get(`products/${category.toLowerCase()}`);
    return response.data;
};