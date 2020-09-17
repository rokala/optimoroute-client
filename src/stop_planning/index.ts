import { RequestBase, ResponseBase } from '../base';

interface Response extends ResponseBase {
}

/**
 * @see https://optimoroute.com/api/#stop-planning
 */
export class StopPlanning extends RequestBase {
    public stopPlanning(planningId: bigint): Promise<Response> {
        const options = {
            method: 'POST',
            body: JSON.stringify({ planningId })
        };
        return this.request<Response>('stop_planning', options);
    }
}
