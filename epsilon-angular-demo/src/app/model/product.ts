export class Product {
    id: number;
    name: string;
    description: string;
    unit_price: number;
    category: string = 'vegitable';
    brand: string = 'Malnad';
    quantity_per_unit?: string;
    discount = 0;
    picture: string;
}
