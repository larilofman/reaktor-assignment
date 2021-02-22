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
    Loading = "",
    InStock = "In Stock",
    OutOfStock = "Out of stock",
    LowStock = "Low stock"
}

export type ProductsState = { [key: string]: Product[] }

