import { DateRange } from '../model/date_range';
import { RequestBase, ResponseBase } from '../base';

/**
 * OFF – No balancing
 * ON – Balance routes
 * ON_FORCE – Balance routes and use all drivers
 */
type PlanningBalancing = 'OFF' | 'ON' | 'ON_FORCE';

/**
 * WT – Working time
 * NUM – Number of orders per driver
 */
type BalanceBy = 'WT' | 'NUM';

/**
 * EMPTY – Ignore existing routes and start from scratch
 * CURRENT – Start planning with the existing routes
 */
type StartWith = 'EMPTY' | 'CURRENT';

/**
 * NONE – Allow all changes to the existing routes
 * ROUTES - Keep planned Routes unchanged and add new Orders to unused
 * RESOURCES - Keep Drivers/Vehicles for planned Orders and fit in new Orders
 */
type LockType = 'NONE' | 'ROUTES' | 'RESOURCES';

type SelectedDriver = {
    driverExternalId?: string,
    driverSerial?: string
};

interface StartPlanningParams {
    date: string,
    dateRange?: DateRange,
    balancing?: PlanningBalancing,
    balanceBy?: BalanceBy,
    balancingFactor: number,
    startWith?: StartWith,
    lockType?: LockType,
    depotTrips?: boolean,
    depotVisitDuration?: bigint,
    clustering?: boolean,
    useDrivers?: SelectedDriver[],
    useOrders?: string[],
    includeScheduledOrders?: boolean
}

interface Response extends ResponseBase {
    planningId?: bigint,
    missingOrders?: string[],
    missingDrivers?: SelectedDriver[]
}

/**
 * @see https://optimoroute.com/api/#start-planning
 */
export class StartPlanning extends RequestBase {
    public startPlanning(params: StartPlanningParams): Promise<Response> {
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };
        return this.request<Response>('start_planning', options);
    }
}
