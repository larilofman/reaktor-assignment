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
            // update every item in every category with stock data
            const newState: { [key: string]: Product[] } = {};
            for (const key in state) {
                if (Object.prototype.hasOwnProperty.call(state, key)) {
                    newState[key] = state[key].map(item => (
                        {
                            ...item,
                            availability: action.payload[item.id] ? action.payload[item.id] : item.availability
                        }
                    ));
                }
            }
            return newState;
        });
});

export default reducer;