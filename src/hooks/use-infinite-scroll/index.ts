import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../components/state/reducer/products/types";
import { RootState } from "../../components/state/store";

const useInfiniteScroll = (category: string, sliceAmount = 100) => {
    const products = useSelector((state: RootState) => state.products[category]);
    const [isBottom, setIsBottom] = useState(false);
    const [shownProducts, setShownProducts] = useState<Product[]>([]);

    useEffect(() => {
        addProducts();
    }, [products.length]);

    const addProducts = () => {
        setShownProducts(products.slice(0, shownProducts.length + sliceAmount));
        setIsBottom(false);
    };

    const handleScroll = () => {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;

        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;

        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            setIsBottom(true);
        }
    };

    useEffect(() => {
        if (isBottom) {
            addProducts();
        }
    }, [isBottom]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { shownProducts };
};

export default useInfiniteScroll;
