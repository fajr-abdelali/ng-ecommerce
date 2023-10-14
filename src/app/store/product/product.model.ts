import IProduct from '../../interfaces/product.interface';

export interface IProductState {
    products: IProduct[];
    isLoading: boolean;
}