import axios from 'axios';
import { apiUrl } from '../../data.json';

export const getAvailabilityByManufacturer = async (manufacturer: string) => {
    const response = await axios.get(`${apiUrl}/availability/${manufacturer}`, {
        headers: { 'referer': 'https://warehouse-listing.herokuapp.com/' }
    });
    return response.data;
};