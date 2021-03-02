import { createReducer } from '@reduxjs/toolkit';
import { SetAvailability } from './action';
import { AvailabilityState } from './types';

const initialState: AvailabilityState = {};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetAvailability, (state, action) => {
            return {
                ...state,
                [action.payload.manufacturer]: action.payload.availability
            };
        });
});

export default reducer;