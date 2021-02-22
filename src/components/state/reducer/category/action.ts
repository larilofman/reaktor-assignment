import { SET_SELECTED_CATEGORY } from './types';
import { createAction } from '@reduxjs/toolkit';

export const SetSelectedCategory = createAction<string>(SET_SELECTED_CATEGORY);
