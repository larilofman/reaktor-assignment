import { createAction, Dispatch } from '@reduxjs/toolkit';
import { Availability, Product, SET_PRODUCTS, SET_AVAILABILITY } from './types';
import { getProductsByCategory } from '../../../services/products';
import { getAvailabilityByManufacturer, getAvailabilityByManufacturerBroken } from '../../../services/availability';

export const SetProducts = createAction<{ category: string, products: Product[] }>(SET_PRODUCTS);
export const SetAvailability = createAction<Record<string, Availability>>(SET_AVAILABILITY);

export const GetProducts = (category: string) => {
    return async (dispatch: Dispatch<{ type: "SET_PRODUCTS", payload: { category: string, products: Product[] } }>) => {
        const products = await getProductsByCategory(category);
        dispatch({
            type: "SET_PRODUCTS",
            payload: { category, products }
        });
    };
};

export const GetAvailability = (manufacturer: string) => {
    return async (dispatch: Dispatch<{ type: "SET_AVAILABILITY", payload: Record<string, Availability> }>) => {
        let data: { code: number, response: { id: string, DATAPAYLOAD: string }[] | "[]" } = await getAvailabilityByManufacturer(manufacturer);
        console.log(manufacturer);
        while (data.response === "[]") {
            console.error('error fetching availability data, retrying');
            data = await getAvailabilityByManufacturer(manufacturer);
        }

        const availabilityObject = data.response.reduce<Record<string, Availability>>((acc, cur) => {
            acc[cur.id.toLowerCase()] = formatAvailability(cur.DATAPAYLOAD);
            return acc;
        }, {});
        // console.log(availabilityObject);

        dispatch({
            type: "SET_AVAILABILITY",
            payload: availabilityObject
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
        return Availability.Default;
    }

};
