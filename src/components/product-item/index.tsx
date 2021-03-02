import React, { Fragment } from 'react';
import { Availability, Product } from '../state/reducer/products/types';
import './style.css';
import LoadingText from '../loading-text';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';

interface Props {
    product: Product
}

const ProductItem: React.FC<Props> = ({ product }) => {
    const availability = useSelector((state: RootState) =>
        (state.availability[product.manufacturer] && state.availability[product.manufacturer][product.id])
            ? state.availability[product.manufacturer][product.id]
            : Availability.Loading
    );

    // console.log('rendering ', product.name, product.id);

    let availabilityClass = "";
    switch (availability) {
        case Availability.InStock:
            availabilityClass = "product-in-stock";
            break;
        case Availability.OutOfStock:
            availabilityClass = "product-out-of-stock";
            break;
        case Availability.LowStock:
            availabilityClass = "product-low-stock";
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
                {availability === Availability.Loading
                    ?
                    <LoadingText />
                    : availability}
            </td>
        </tr>
    );
};

export default ProductItem;
