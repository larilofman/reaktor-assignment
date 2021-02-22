import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../state/reducer/products/types';
import { RootState } from '../state/store';
import './style.css';
import ProductItem from '../product-item';
import LoadingText from '../loading-text';

interface Props {
    category: string
}

const ProductList: React.FC<Props> = ({ category }) => {
    const products = useSelector((state: RootState) => state.products[category]);
    const [shownProducts, setShownProducts] = useState<Product[]>();

    useEffect(() => {
        if (products) {
            setShownProducts(products.slice(0, 150));
        }

    }, [products]);

    if (!shownProducts) return (
        <div className="product-table-container">
            <LoadingText fontSize="3rem" />
        </div>
    );

    return (
        <div className="product-table-container">
            <table className="product-table">
                <thead className="product-table-header">
                    <tr >
                        <th>Name</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Manufacturer</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody className="product-table-body">
                    {shownProducts.map(p => <ProductItem key={p.id} product={p} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
