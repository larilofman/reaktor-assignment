import axios from 'axios';
import { Category } from '../state/reducer/category/types';

export const getProductsByCategory = async (category: Category) => {
    const response = await axios.get(`products/${category.toLowerCase()}`);
    return response.data;
};