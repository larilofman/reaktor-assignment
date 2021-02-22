import { createReducer } from '@reduxjs/toolkit';
import { SetProducts, SetAvailability } from './action';
import { Product, ProductsState } from './types';

const initialState: ProductsState = {};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetProducts, (state, action) => {
            state[action.payload.category] = action.payload.products;
        })
        .addCase(SetAvailability, (state, action) => {
            const clonedState: { [key: string]: Product[] } = {};
            for (const key in state) {
                if (Object.prototype.hasOwnProperty.call(state, key)) {
                    clonedState[key] = state[key].map(item => ({ ...item, availability: action.payload[item.id] ? action.payload[item.id] : item.availability }));
                }
            }
            return clonedState;
        });
});

export default reducer;