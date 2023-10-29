export default interface IProduct {
    id: number;
    title: string;
    brand?:string;
    price: number;
    description?: string;
    category: string;
    image: string[];
    options?:options[];
    rating: rating
}
interface rating {
    rate?: number;
    count?: number;
}

interface options{
    name:string;
    options:string[]
}