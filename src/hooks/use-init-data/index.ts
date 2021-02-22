import { useEffect, } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetManufacturers } from "../../components/state/reducer/manufacturers/action";
import { GetProducts, GetAvailability } from "../../components/state/reducer/products/action";
import { RootState } from "../../components/state/store";

const useInitData = () => {
    const allCategories = useSelector((state: RootState) => state.category.allCategories);
    const products = useSelector((state: RootState) => state.products);
    const manufacturers = useSelector((state: RootState) => state.manufacturers);
    const dispatch = useDispatch();

    useEffect(() => {
        allCategories.forEach(category => {
            dispatch(GetProducts(category));
        });

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
    }, [products]);

    useEffect(() => {
        if (manufacturers.length) {
            // console.log(manufacturers);
            manufacturers.forEach(manufacturer => dispatch(GetAvailability(manufacturer)));
            // dispatch(GetAvailability(manufacturers));
        }

    }, [manufacturers.length]);

};

export default useInitData;
