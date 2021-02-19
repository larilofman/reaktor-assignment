import { SET_SELECTED_CATEGORY, Category } from './types';
import { createAction } from '@reduxjs/toolkit';

export const SetSelectedCategory = createAction<Category>(SET_SELECTED_CATEGORY);
