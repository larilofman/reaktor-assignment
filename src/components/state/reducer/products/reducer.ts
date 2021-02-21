import { createReducer } from '@reduxjs/toolkit';
import { Category } from '../category/types';
import { SetProducts, SetAvailability } from './action';
import { Product, ProductsState } from './types';

const initialState: ProductsState = {
    Gloves: [],
    Facemasks: [],
    Beanies: [],
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetProducts, (state, action) => {
            state[action.payload.category] = action.payload.products;
        });
    // .addCase(SetAvailability, (state, action) => {
    //     state = (state: ProductsState) => {
    //         for (const key in state) {
    //             if (Object.prototype.hasOwnProperty.call(state, key)) {
    //                 state[key as Category]: 
    //             }
    //         }
    //     };
    // });
});

export default reducer;