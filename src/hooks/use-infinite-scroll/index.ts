import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../components/state/reducer/products/types";
import { RootState } from "../../components/state/store";

const useInfiniteScroll = (category: string, sliceAmount = 100) => {
    const products = useSelector((state: RootState) => state.products[category] ? state.products[category] : []);
    const [isBottom, setIsBottom] = useState(false);
    const [prevCategory, setPrevCategory] = useState("");
    const [shownProducts, setShownProducts] = useState<Product[]>([]);

    // when category changes and so does the amount of products
    useEffect(() => {
        // scroll to top and show only the initial amount of products
        resetProducts();
        // set "previous" category as the current one
        setPrevCategory(category);
    }, [products.length]);

    const resetProducts = () => {
        if (products) {
            setShownProducts(products.slice(0, sliceAmount));
            window.scrollTo(0, 0);
            setIsBottom(false);
        }
    };

    useEffect(() => {
        // when products(mostly their stock status) change but category hasn't changed, update products with the stock status
        updateProducts();
    }, [products]);

    const updateProducts = () => {
        if (products && shownProducts.length && category === prevCategory) {
            setShownProducts(products.slice(0, shownProducts.length));
        }
    };

    // add more products to show when scrolling
    const addProducts = () => {
        if (products) {
            setShownProducts(products.slice(0, shownProducts.length + sliceAmount));
            setIsBottom(false);
        }
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
