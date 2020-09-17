import { RequestBase, ResponseBase } from '../base';
import { Schedule } from '../model/schedule';

const resource = 'get_scheduling_info';

interface Response extends ResponseBase {
    orderScheduled: boolean,
    scheduleInformation? : Schedule,
}

/**
 * @see https://optimoroute.com/api/#get-scheduling-information
 */
export class GetSchedulingInfo extends RequestBase {
    public getSchedulingInfo(orderNo: string): Promise<Response> {
        const options = {
            method: 'GET'
        };
        return this.request<Response>(resource, options, { orderNo });
    }
}
