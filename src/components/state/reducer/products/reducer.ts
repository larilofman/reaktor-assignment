import { createReducer } from '@reduxjs/toolkit';
import { Category } from '../category/types';
import { SetProducts } from './action';
import { ProductsState } from './types';

const initialState: ProductsState = {
    Gloves: [],
    Facemasks: [],
    Beanies: [],
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetProducts, (state, action) => {
            state[action.payload.category] = action.payload.products
        })
})

export default reducer;