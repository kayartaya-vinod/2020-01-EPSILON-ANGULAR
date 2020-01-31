import { LineItem } from '../../model/line-item';

export class Order {
    id: number;
    customerId: number;
    orderDate: string = new Date().toISOString(); // ISO date value yyyy-mm-dd
    lineItems: LineItem[];
    orderStatus: string = 'PENDING'; 
}
