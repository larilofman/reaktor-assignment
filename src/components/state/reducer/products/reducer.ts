import { createReducer } from '@reduxjs/toolkit';
import { SetProducts } from './action';
import { ProductsState } from './types';

const initialState: ProductsState = {};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetProducts, (state, action) => {
            state[action.payload.category] = action.payload.products;
        });

});

export default reducer;