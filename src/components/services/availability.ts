import axios from 'axios';

const debugConfig = {
    headers: {
        "x-force-error-mode": "all",
    }
};

export const getAvailabilityByManufacturer = async (manufacturer: string) => {
    const response = await axios.get(`availability/${manufacturer}`);
    return response.data;
};

export const getAvailabilityByManufacturerBroken = async (manufacturer: string) => {
    const response = await axios.get(`availability/${manufacturer}`, debugConfig);
    return response.data;
};