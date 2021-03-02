export const SET_AVAILABILITY = 'SET_AVAILABILITY';

export enum Availability {
    Loading = "",
    InStock = "In Stock",
    OutOfStock = "Out of stock",
    LowStock = "Low stock"
}

export type AvailabilityState = {
    [key: string]: { // manufacturer
        [key: string]: Availability // product availability
    }
}

