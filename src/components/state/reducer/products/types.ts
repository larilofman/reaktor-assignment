import { Category } from "../category/types";

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCTS2 = 'SET_PRODUCTS2';
export type ProductsState = { [key in keyof typeof Category]: any[] }
