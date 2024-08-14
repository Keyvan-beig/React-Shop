

export interface typeProductBasket {
    created_at: string;
    description: string;
    id: string;
    image : string;
    name: string;
    price: number;
    rate: number;
    quantity: number;
}

export interface stateType {
    items: typeProductBasket[];
    invoice: {
        totalPrice: number
    }
}
