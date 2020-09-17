import { CreateOrder } from './create_order';
import { CreateOrUpdateOrders } from './create_or_update_orders';
import { GetOrders } from './get_orders';
import { DeleteOrder } from './delete_order';
import { DeleteAllOrders } from './delete_all_orders';
import { DeleteOrders } from './delete_orders';
import { GetRoutes } from './get_routes';
import { GetSchedulingInfo } from './get_scheduling_info';
import { StartPlanning } from './start_planning';
import { StopPlanning } from './stop_planning';
import { GetPlanningStatus } from './get_planning_status';
import { UpdateDriverParameters } from './update_driver_parameters';
import { GetMobileEvents } from './get_events';
import { applyMixins } from './utils';
import { RequestBase } from './base';

class OptimoRoute extends RequestBase { }

interface OptimoRoute extends
    CreateOrder,
    CreateOrUpdateOrders,
    GetOrders,
    DeleteOrder,
    DeleteAllOrders,
    DeleteOrders,
    GetRoutes,
    GetSchedulingInfo,
    StartPlanning,
    StopPlanning,
    GetPlanningStatus,
    UpdateDriverParameters,
    GetMobileEvents {}
    
applyMixins(
    OptimoRoute,
    [
        CreateOrder,
        CreateOrUpdateOrders,
        GetOrders,
        DeleteOrder,
        DeleteAllOrders,
        DeleteOrders,
        GetRoutes,
        GetSchedulingInfo,
        StartPlanning,
        StopPlanning,
        GetPlanningStatus,
        UpdateDriverParameters,
        GetMobileEvents
    ]
);

export default OptimoRoute;

