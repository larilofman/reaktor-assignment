import React from 'react';
import { Product } from '../state/reducer/products/types';
import './style.css';

interface Props {
    product: Product
}

const ProductItem: React.FC<Props> = ({ product }) => {

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.color.join(", ")}</td>
            <td>{product.price}</td>
            <td>{product.manufacturer}</td>
            <td>{product.availability}</td>
        </tr>
    );
};

export default ProductItem;
