import { createReducer } from '@reduxjs/toolkit';
import { SetManufacturers } from './action';
import { ManufacturersState } from './types';

const initialState: ManufacturersState = [];
const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetManufacturers, (state, action) => {
            return action.payload;
        });
});

export default reducer;