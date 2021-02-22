import React from 'react';
import './style.css';

interface Props {
    category: string
    onClick: () => void
    selected: boolean
}

const CategoryLink: React.FC<Props> = ({ category, onClick, selected }) => {

    const containerClass = `category ${selected && "category-selected"}`;

    return (
        <div className={containerClass} onClick={onClick}>
            <p className="category-text">
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>
        </div>
    );
};

export default CategoryLink;
