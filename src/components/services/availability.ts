import axios from 'axios';
import { apiUrl, proxy } from '../../data.json';

export const getAvailabilityByManufacturer = async (manufacturer: string) => {
    const response = await axios.get(`${proxy}/${apiUrl}/availability/${manufacturer}`);
    return response.data;
};