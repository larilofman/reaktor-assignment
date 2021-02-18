import { useSelector } from 'react-redux';
import { Category } from '../state/reducer/category/types';
import { RootState } from '../state/store';
import './style.css';

interface Props {
    category: Category
}

const ProductList: React.FC<Props> = ({ category }) => {
    const products = useSelector((state: RootState) => state.products[category]);
    return (
        <div>
            {products.map(p => p.name)};
        </div>
    );
}

export default ProductList;
