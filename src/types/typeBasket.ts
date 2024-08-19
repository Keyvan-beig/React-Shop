

export interface typeProductBasket {
    created_at: string;
    description: string;
    id: string;
    image : string;
    name: string;
    price: number;
    rate: number;
    count : number
    size : string
}

export interface stateType {
    items: typeProductBasket[];
    invoice: {
        totalPrice: number
    }
}
