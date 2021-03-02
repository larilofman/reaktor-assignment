import { createAction, Dispatch } from '@reduxjs/toolkit';
import { Availability, SET_AVAILABILITY } from './types';
import { getAvailabilityByManufacturer } from '../../../services/availability';

export const SetAvailability = createAction<{ manufacturer: string, availability: Record<string, Availability> }>(SET_AVAILABILITY);

export const GetAvailability = (manufacturer: string) => {
    return async (dispatch: Dispatch<{ type: typeof SET_AVAILABILITY, payload: { manufacturer: string, availability: Record<string, Availability> } }>) => {
        let data: { code: number, response: { id: string, DATAPAYLOAD: string }[] | "[]" } = await getAvailabilityByManufacturer(manufacturer);
        // retry fetching data until response is no longer the curious string of brackets
        while (!data || data.response === "[]") {
            console.error('error fetching stock data, retrying');
            data = await getAvailabilityByManufacturer(manufacturer);
        }

        // turn stock data into enum format
        const availabilityObject = data.response.reduce<Record<string, Availability>>((acc, cur) => {
            acc[cur.id.toLowerCase()] = formatAvailability(cur.DATAPAYLOAD);
            return acc;
        }, {});

        dispatch({
            type: SET_AVAILABILITY,
            payload: { manufacturer, availability: availabilityObject }
        });
    };
};

const formatAvailability = (dataString: string): Availability => {
    if (dataString.includes(">INSTOCK")) {
        return Availability.InStock;
    } else if (dataString.includes(">OUTOFSTOCK")) {
        return Availability.OutOfStock;
    } else if (dataString.includes(">LESSTHAN10")) {
        return Availability.LowStock;
    } else {
        return Availability.Loading;
    }
};
