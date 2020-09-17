import { RequestBase, ResponseBase } from '../base';
import { Order } from '../model/order';

// @todo: Mögulega nota OrderResponse úr model (líka breyta þá create_or_update_orders)
interface OrderResponse extends ResponseBase {
    orderNo?: string,
    data?: Order[]
};

interface Response  {
    success: boolean,
    orders: OrderResponse[]
}

/**
 * @see https://optimoroute.com/api/#get-orders-bulk
 */
export class GetOrders extends RequestBase {
    public getOrders(params: Order[]): Promise<Response>;
    public getOrders(params: string): Promise<Response>;
    public getOrders(params: Order[] | string): Promise<Response> {
        let requestObj: Object;
        let options: RequestInit;
        if (typeof params === 'string') {
            requestObj = { orderNo: params };
            options = {
                method: 'GET'
            };
        } else {
            requestObj = params;
            options = {
                method: 'POST',
                body: JSON.stringify({ orders: params })
            };
        }
        return this.request<Response>('get_orders', options, requestObj);
    }
}
