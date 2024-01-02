import { createReducer, on } from "@ngrx/store";
import { IProductState } from "./product.model";
import * as fromProduct from "./index";

export const initialProductState: IProductState = {
    products: [],
    isLoading: false
}

const reducer = createReducer<IProductState>(
    initialProductState,
    on(fromProduct.getProducts, (state) => {
        return { ...state, isLoading: true }
    }),
    on(fromProduct.getProductsSuccess, (state, { products }) => {
        return {
            ...state, isLoading: false, products
        }
    }),
    on(fromProduct.addProduct, (state, { product }) => {
        return {
            ...state,
            products: [...state.products, product],
        };
    })
)
export function productReducer(state = initialProductState, actions: any): IProductState {
    return reducer(state, actions)
}