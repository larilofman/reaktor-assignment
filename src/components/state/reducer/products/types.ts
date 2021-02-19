import { Category } from "../category/types";

export const SET_PRODUCTS = 'SET_PRODUCTS';

export interface Product {
    id: string,
    type: string,
    name: string,
    color: string[],
    price: number,
    manufacturer: string,
    availability: 'In stock' | 'Out of stock' | 'Less than 10' | undefined
}

export type ProductsState = { [key in keyof typeof Category]: Product[] }

