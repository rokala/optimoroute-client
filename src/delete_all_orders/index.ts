import { RequestBase, ResponseBase } from '../base';

interface Response extends ResponseBase {
    planningId?: bigint
}

/**
 * @see https://optimoroute.com/api/#delete-all-orders
 */
export class DeleteAllOrders extends RequestBase {
    public deleteAllOrders(date?: string): Promise<Response> {
        const options = {
            method: 'POST',
            body: JSON.stringify({ date })
        };
        return this.request<Response>('delete_all_orders', options);
    }
}
