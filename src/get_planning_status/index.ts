import { RequestBase, ResponseBase } from '../base';

/**
 * N - New
 * R - Running
 * C - Cancelled by the user
 * F - Finished
 * E - Error occurred
 */
type PlanningStatus = 'N' | 'R' | 'C' | 'F' | 'E';

interface Response extends ResponseBase {
    status?: PlanningStatus,
    percentageComplete?: bigint
}

/**
 * @see https://api.optimoroute.com/v1/get_planning_status
 */
export class GetPlanningStatus extends RequestBase {
    public getPlanningStatus(planningId: bigint): Promise<Response> {
        const options = {
            method: 'GET',
        };
        return this.request<Response>('get_planning_status', options, { planningId });
    }
}
