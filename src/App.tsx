import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CategoryBar from './components/category-bar';
import ProductList from './components/product-list';
import { GetProducts, GetAvailability } from './components/state/reducer/products/action';
import { RootState } from './components/state/store';
import useInitData from './hooks/use-init-data';

const App = () => {
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory);
    useInitData();
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
};

export default App;
