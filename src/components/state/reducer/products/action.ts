import { createAction, Dispatch } from '@reduxjs/toolkit';
import { Category } from '../category/types';
import { Availability, Product, SET_PRODUCTS, SET_AVAILABILITY } from './types';
import { getProductsByCategory } from '../../../services/products';
import { getAvailabilityByManufacturer, getAvailabilityByManufacturerBroken } from '../../../services/availability';

export const SetProducts = createAction<{ category: Category, products: Product[] }>(SET_PRODUCTS);
export const SetAvailability = createAction<{ [key: string]: Availability }>(SET_AVAILABILITY);

export const FetchProducts = (category: Category) => {
    return async (dispatch: Dispatch<{ type: "SET_PRODUCTS", payload: { category: Category, products: Product[] } }>) => {
        const products = await getProductsByCategory(category);
        dispatch({
            type: "SET_PRODUCTS",
            payload: { category, products }
        });
    };
};

export const GetAvailability = (manufacturer: string) => {
    return async (dispatch: Dispatch<{ type: "SET_PRODUCTS", payload: { category: Category, products: Product[] } }>) => {
        let data: { code: number, response: { id: string, DATAPAYLOAD: string }[] | "[]" } = await getAvailabilityByManufacturer(manufacturer);

        while (data.response === "[]") {
            console.error('error fetching availability data, retrying');
            data = await getAvailabilityByManufacturer(manufacturer);
        }

        const availabilityObject = data.response.reduce<Record<string, Availability>>((acc, cur) => {
            acc[cur.id] = formatAvailability(cur.DATAPAYLOAD);
            return acc;
        }, {});
        console.log(availabilityObject);

        // dispatch({
        //     type: "SET_AVAILABILITY",
        //     payload: { manufacturer, availability }
        // });
    };
};

const formatAvailability = (dataString: string): Availability => {
    if (dataString.includes(">INSTOCK")) {
        return Availability.InStock;
    } else if (dataString.includes(">OUTOFSTOCK")) {
        return Availability.OutOfStock;
    } else if (dataString.includes(">LESSTHAN10")) {
        return Availability.LessThan10;
    } else {
        return Availability.Default;
    }

};
