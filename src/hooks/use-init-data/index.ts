import { useEffect, } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAvailability } from "../../components/state/reducer/availability/action";
import { SetManufacturers } from "../../components/state/reducer/manufacturers/action";
import { GetProducts } from "../../components/state/reducer/products/action";
import { RootState } from "../../components/state/store";

const useInitData = () => {
    const allCategories = useSelector((state: RootState) => state.category.allCategories);
    const products = useSelector((state: RootState) => state.products);
    const manufacturers = useSelector((state: RootState) => state.manufacturers);
    const dispatch = useDispatch();

    useEffect(() => {
        // once app starts, fetch products for all the categories 
        allCategories.forEach(category => dispatch(GetProducts(category)));
    }, [dispatch]);

    useEffect(() => {
        // once all the categories are fetched
        if (Object.keys(products).length === allCategories.length) {
            const manufacturers = new Set<string>();

            // find all the unique manufacturer names
            for (const key in products) {
                if (Object.prototype.hasOwnProperty.call(products, key)) {
                    products[key].forEach(p => manufacturers.add(p.manufacturer));
                }
            }
            const manufacturerArray = Array.from(manufacturers);
            dispatch(SetManufacturers(manufacturerArray));
        }
    }, [Object.keys(products).length]);

    useEffect(() => {
        // when all the different manufacturers are found, get their stock data
        if (manufacturers.length) {
            manufacturers.forEach(manufacturer => dispatch(GetAvailability(manufacturer)));
        }
    }, [manufacturers.length]);

};

export default useInitData;
