import { RequestBase, ResponseBase } from '../base';
import { Order } from '../model/order';
import { TimeWindow } from '../model/time_window';
import { OrderOperation } from '../model/order_operation';

// @todo: Mögulega nota OrderResponse úr model (líka breyta þá get_orders)
interface OrderResponse extends ResponseBase {
    orderNo?: string,
    locationNo?: string
};

interface Response  {
    success: boolean,
    orders: OrderResponse[]
}

interface CreateOrUpdateOrdersParams extends Order {
    operation: OrderOperation,
    acceptDuplicateOrderNo: boolean,
    timeWindows: TimeWindow[]
}

/**
 * @see https://optimoroute.com/api/#create-or-update-orders-bulk
 */
export class CreateOrUpdateOrders extends RequestBase {
    public createOrUpdateOrders(params: CreateOrUpdateOrdersParams): Promise<Response> {
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };
        return this.request<Response>('create_or_update_orders', options);
    }
}
