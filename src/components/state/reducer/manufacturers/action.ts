import { SET_MANUFACTURERS } from './types';
import { createAction } from '@reduxjs/toolkit';

export const SetManufacturers = createAction<string[]>(SET_MANUFACTURERS);
