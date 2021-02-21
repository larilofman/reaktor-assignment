import { Category } from "../category/types";

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_AVAILABILITY = 'SET_AVAILABILITY';

export interface Product {
    id: string,
    type: string,
    name: string,
    color: string[],
    price: number,
    manufacturer: string,
    availability: Availability
}

export enum Availability {
    Default = "",
    InStock = "In Stock",
    OutOfStock = "Out of stock",
    LessThan10 = "Less than 10 in stock"
}

export type ProductsState = { [key in keyof typeof Category]: Product[] }

