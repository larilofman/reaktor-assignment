import { createReducer } from '@reduxjs/toolkit';
import { SetSelectedCategory } from './action';
import { CategoryState } from './types';

const initialState: CategoryState = {
    selectedCategory: undefined,
    allCategories: ["gloves", "facemasks", "beanies"]
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetSelectedCategory, (state, action) => {
            state.selectedCategory = action.payload;
        });
});

export default reducer;