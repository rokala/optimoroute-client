import { RequestBase, ResponseBase } from '../base';
import { Order } from '../model/order';
import { TimeWindow } from '../model/time_window';
import { Location } from '../model/location';
import { GeocodingResult } from '../model/geocoding_result';
import { OrderOperation } from '../model/order_operation';

interface Response extends ResponseBase {
    location?: Location,
    geocodingResults: GeocodingResult
}

interface CreateOrderLocationObject extends Location {
    acceptMultipleResults: boolean,
    acceptPartialMatch: boolean
}

interface CreateOrderParams extends Order {
    location: CreateOrderLocationObject
    operation: OrderOperation,
    acceptDuplicateOrderNo: boolean,
    timeWindows: TimeWindow[]
}

/**
 * @see https://optimoroute.com/api/#create-order
 */
export class CreateOrder extends RequestBase {
    public createOrder(params: CreateOrderParams): Promise<Response> {
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };
        return this.request<Response>('create_order', options);
    }
}
