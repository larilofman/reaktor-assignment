import React from 'react';
import './style.css';
import ProductItem from '../product-item';
import LoadingText from '../loading-text';
import useInfiniteScroll from '../../hooks/use-infinite-scroll';

interface Props {
    category: string
}

const ProductList: React.FC<Props> = ({ category }) => {
    const { shownProducts } = useInfiniteScroll(category);

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
