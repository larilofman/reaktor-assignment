import { createAction, createAsyncThunk, Dispatch } from '@reduxjs/toolkit'
import { Category } from '../category/types';
import { SET_PRODUCTS, SET_PRODUCTS2 } from './types';
import { getProductsByCategory } from '../../../services/products'

export const SetProducts = createAction<{ category: Category, products: string[] }>(SET_PRODUCTS);

export const SetProducts2 = (category: Category) => {
    return async (dispatch: Dispatch<any>) => {
        const products = await getProductsByCategory(category)
        dispatch({
            type: "SET_PRODUCTS",
            payload: { category, products }
        })
    }
}

// export const SetProducts2 = createAsyncThunk(
//     SET_PRODUCTS2,
//     async (category: Category) => {
//         const response = await getProductsByCategory(category)
//         if (response) {
//             console.log(response);
//             return response.data;
//         }
//         // return response.data
//     }
// )
