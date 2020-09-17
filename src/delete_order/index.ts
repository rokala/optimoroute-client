import { RequestBase, ResponseBase } from '../base';

interface Response extends ResponseBase {
    planningId?: bigint
}

/**
 * @see https://optimoroute.com/api/#delete-order
 */
export class DeleteOrder extends RequestBase {
    public deleteOrder(orderNo: string): Promise<Response> {
        const options = {
            method: 'POST',
            body: JSON.stringify({ orderNo })
        };
        return this.request<Response>('delete_order', options);
    }
}
