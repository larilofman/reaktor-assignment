import { createReducer } from '@reduxjs/toolkit';
import { SetSelectedCategory } from './action';
import { CategoryState } from './types';
import { categories } from '../../../../data.json';

const initialState: CategoryState = {
    selectedCategory: "gloves",
    allCategories: categories
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetSelectedCategory, (state, action) => {
            state.selectedCategory = action.payload;
        });
});

export default reducer;