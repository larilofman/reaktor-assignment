import React, { Fragment } from 'react';
import { Availability, Product } from '../state/reducer/products/types';
import './style.css';
import LoadingText from '../loading-text';

interface Props {
    product: Product
}

const ProductItem: React.FC<Props> = ({ product }) => {

    let availabilityClass = "";
    switch (product.availability) {
        case Availability.InStock:
            availabilityClass = "product-in-stock";
            break;
        case Availability.OutOfStock:
            availabilityClass = "product-out-of-stock";
            break;
        case Availability.LowStock:
            availabilityClass = "product-low";
            break;
        default:
            break;
    }

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.color.map((color, index) =>
                <Fragment key={color}>
                    <span className="color-text" style={{ color }}>
                        {`${color}`}
                    </span>
                    {index !== product.color.length - 1 && ", "}
                </Fragment>
            )}</td>
            <td>{product.price}</td>
            <td>{product.manufacturer}</td>
            <td className={availabilityClass}>
                {product.availability === Availability.Loading
                    ?
                    <LoadingText />
                    : product.availability}

            </td>
        </tr>
    );
};

export default ProductItem;
