export interface Product {
    id: number,
    title: string,
    band: string,
    detail: string,
    pictureUrl: string,
    price: number,
    category: string,
    gender?: string,
    type?: string,
    stock: number
}

export interface CategorySelectedProps {
    setCategorySelected: (category: string) => void;
}

export interface CategoryItemProps {
    category: string;
    setCategorySelected: (category: string) => void;
}