import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CategoryBar from './components/category-bar';
import ProductList from './components/product-list';
import { Category } from './components/state/reducer/category/types';
import { SetProducts2 } from './components/state/reducer/products/action';
import { RootState } from './components/state/store';

const App = () => {
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory)
    const dispatch = useDispatch();

    useEffect(() => {
        Object.keys(Category).forEach((category) =>
            dispatch(SetProducts2(category as Category))
        )
        // dispatch(SetProducts2(Category.Gloves))
    }, [dispatch])

    return (
        <div className="App">
            <CategoryBar />
            {selectedCategory
                ?
                <ProductList category={selectedCategory} />
                :
                <div className="selection-prompt">
                    Select a product category.
                </div>
            }
        </div>
    );
}

export default App;
