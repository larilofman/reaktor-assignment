import { createAction, Dispatch } from '@reduxjs/toolkit';
import { Availability, Product, SET_PRODUCTS, SET_AVAILABILITY } from './types';
import { getProductsByCategory } from '../../../services/products';

export const SetProducts = createAction<{ category: string, products: Product[] }>(SET_PRODUCTS);

export const GetProducts = (category: string) => {
    return async (dispatch: Dispatch<{ type: typeof SET_PRODUCTS, payload: { category: string, products: Product[] } }>) => {
        const products: Product[] = await getProductsByCategory(category);

        dispatch({
            type: SET_PRODUCTS,
            payload: { category, products }
        });
    };
};

