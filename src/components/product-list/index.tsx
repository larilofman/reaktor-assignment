import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Category } from '../state/reducer/category/types';
import { Product } from '../state/reducer/products/types';
import { RootState } from '../state/store';
import ProductTable from '../product-table';
import './style.css';
import ProductItem from '../product-item';

interface Props {
    category: Category
}

const ProductList: React.FC<Props> = ({ category }) => {
    const products = useSelector((state: RootState) => state.products[category]);
    const [shownProducts, setShownProducts] = useState<Product[]>();

    useEffect(() => {
        if (products) {
            setShownProducts(products.slice(0, 150));
        }

    }, [products]);

    if (!shownProducts) return null;

    return (
        // <ProductTable headers={["Name", "Color", "Price", "Manufacturer"]} data={shownProducts} />
        <div className="product-table-container">
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Manufacturer</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {shownProducts.map(p => <ProductItem key={p.id} product={p} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
