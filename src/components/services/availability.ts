import axios from 'axios';

export const getAvailabilityByManufacturer = async (manufacturer: string) => {
    const response = await axios.get(`availability/${manufacturer}`);
    return response.data;
};