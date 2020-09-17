import { Order } from '../model/order';
import { RequestBase, ResponseBase } from '../base';

interface Response extends ResponseBase {
    orderNo: string,
    planningId?: bigint
}

interface DeleteOrdersParams {
    orders: Order[],
    deleteMultiple?: boolean
}

/**
 * @see https://optimoroute.com/api/#delete-orders-bulk
 */
export class DeleteOrders extends RequestBase {
    public deleteOrders(params: DeleteOrdersParams): Promise<Response> {
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };
        return this.request<Response>('delete_orders', options);
    }
}
