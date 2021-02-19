import { createAction, Dispatch } from '@reduxjs/toolkit';
import { Category } from '../category/types';
import { Product, SET_PRODUCTS } from './types';
import { getProductsByCategory } from '../../../services/products';

export const SetProducts = createAction<{ category: Category, products: Product[] }>(SET_PRODUCTS);

export const FetchProducts = (category: Category) => {
    return async (dispatch: Dispatch<{ type: "SET_PRODUCTS", payload: { category: Category, products: Product[] } }>) => {
        const products = await getProductsByCategory(category);
        dispatch({
            type: "SET_PRODUCTS",
            payload: { category, products }
        });
    };
};
