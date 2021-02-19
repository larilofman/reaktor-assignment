import React from 'react';
import './style.css';
import CategoryLink from '../category-link';
import { Category } from '../state/reducer/category/types';
import { SetSelectedCategory } from '../state/reducer/category/action';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';

const CategoryBar = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory);
    const allCategories = useSelector((state: RootState) => state.category.allCategories);

    return (
        <div className="category-container">
            <div className="category-header">Products</div>
            {allCategories.map(c =>
                <CategoryLink
                    key={c}
                    category={c}
                    onClick={() => dispatch(SetSelectedCategory(c))}
                    selected={selectedCategory === c}
                />
            )}

        </div>

    );
};

export default CategoryBar;
