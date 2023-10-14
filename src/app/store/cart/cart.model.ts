import ICartItem from '../../interfaces/cart.interface';

export interface ICartState {
    cart: ICartItem[];
    totalQuantity: number;
    totalPrice: number;
    isLoading: boolean;
}