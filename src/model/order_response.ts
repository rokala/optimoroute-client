import { Order } from './order';

type OrderResponse = {
    orderNo?: string,
    locationNo?: string
    data?: Order[]
};