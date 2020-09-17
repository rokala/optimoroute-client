import { MobileEvent } from '../model/mobile_event';
import { RequestBase, ResponseBase } from '../base';

interface Response extends ResponseBase {
    events: MobileEvent[],
    tag?: string,
    remainingEvents?: bigint
}

interface GetEventsParams {
    afterTag: string
};

/**
 * @see https://optimoroute.com/api/#get-mobile-events
 */
export class GetMobileEvents extends RequestBase {
    public getMobileEvents(afterTag: string): Promise<Response> {
        const options = {
            method: 'GET'
        };
        return this.request<Response>('get_events', options, { afterTag });
    }
}
