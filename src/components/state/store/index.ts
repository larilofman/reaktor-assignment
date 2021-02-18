import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categoryReducer from '../reducer/category/reducer'
import productsReducer from '../reducer/products/reducer'

const rootReducer = combineReducers(
    {
        category: categoryReducer,
        products: productsReducer
    });

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>
export default store;