export interface typeProduct {
    created_at : string;
    description: string;
    id: string;
    image : string;
    name: string;
    price: number;
    rate: number
}

export interface getProduct {
    data: typeProduct[] | undefined;
    error: unknown | null
}

