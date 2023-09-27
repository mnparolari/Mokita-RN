export interface Product {
    id: number,
    title: string,
    band: string,
    detail: string,
    description: string,
    images: string,
    price: number,
    category: string,
    gender?: string,
    type?: string,
    stock: number
}

export interface Navigation {
    navigate: (route: string, params?: object) => void;
    goBack: () => void;
}

export interface CategorySelectedProps {
    setCategorySelected: (category: string) => void;
}

export interface CategoryItemProps {
    category: string;
    setCategorySelected: (category: string) => void;
}

export interface ProductsProps {
    category: string;
    setProductSelected: (product: Product) => void;
}

export interface CounterProps {
    stock: number | undefined;
    initial: number | undefined;
}

