import { createReducer } from '@reduxjs/toolkit';
import { SetSelectedCategory } from './action';
import { State, Category } from './types';

const initialState: State = {
    selectedCategory: undefined,
    allCategories: [
        Category.Gloves,
        Category.Facemasks,
        Category.Beanies
    ]
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SetSelectedCategory, (state, action) => {
            state.selectedCategory = action.payload
        })
})

export default reducer;