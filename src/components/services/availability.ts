import axios from 'axios';
import { apiUrl } from '../../data.json';

export const config = {
    headers: { 'Access-Control-Allow-Origin': '*' }
};

export const getAvailabilityByManufacturer = async (manufacturer: string) => {
    const response = await axios.get(`${apiUrl}/availability/${manufacturer}`, config);
    return response.data;
};