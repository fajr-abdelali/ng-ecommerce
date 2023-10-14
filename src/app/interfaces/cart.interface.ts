import IProduct from "./product.interface";

export default interface ICartItem {
    product: IProduct;
    quantity: number;
}