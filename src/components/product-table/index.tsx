import React from 'react';
import useStickyHeader from '../../hooks/use-sticky-header';
import ProductItem from '../product-item';
import { Product } from '../state/reducer/products/types';
import './style.css';

interface Props {
    headers: string[];
    data: Product[];
}

const ProductTable: React.FC<Props> = ({ headers = [], data = [] }) => {
    const { tableRef, isSticky } = useStickyHeader();

    const renderHeader = () => (
        <thead>
            <tr className="table-header">
                {headers.map(item => <th key={item} id={`header-${item}`}>{item}</th>)}
            </tr>
        </thead>
    );

    return (
        <div className="product-table-container">
            {isSticky && (
                <table
                    className="product-table"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 256,
                        right: 0
                    }}
                >
                    {renderHeader()}
                </table>
            )}
            <table className="product-table" ref={tableRef}>
                {renderHeader()}
                <tbody>
                    {data.map(product => <ProductItem key={product.id} product={product} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;