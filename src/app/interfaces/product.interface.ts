export default interface IProduct {
    id: number;
    title: string;
    brand?: string;
    price: number;
    description?: string;
    category: string;
    image: string[];
    options?: options[];
    rating: rating;
    colors?: Colors[];
    size?: number[];
}
interface rating {
    rate?: number;
    count?: number;
}

interface options {
    name: string;
    options: string[]
}

interface Colors {
    name?: string,
    hexa: string
}