import React from 'react';
import { Category } from '../state/reducer/category/types';
import './style.css';

interface Props {
    category: Category
    onClick: () => void
    selected: boolean
}

const CategoryLink: React.FC<Props> = ({ category, onClick, selected }) => {

    const containerClass = `category ${selected && "category-selected"}`;

    return (
        <div className={containerClass} onClick={onClick}>
            <p className="category-text">
                {category}
            </p>
        </div>
    );
};

export default CategoryLink;
