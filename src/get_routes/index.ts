import { RequestBase, ResponseBase } from '../base';
import { Route } from '../model/route';

interface Response extends ResponseBase {
    routes: {
        data: Route[],
        success: boolean
    },
}

type RouteParameters = {
    date: string,
    driverExternalId?: string,
    driverSerial?: string,
    vehicleRegistration?: string,
    includeRoutePolyline?: boolean,
};

/**
 * @see https://optimoroute.com/api/#get-routes
 */
export class GetRoutes extends RequestBase {
    public getRoutes(params: RouteParameters): Promise<Response> {
        const options = {
            method: 'GET'
        };
        return this.request<Response>('get_routes', options, params);
    }
}
