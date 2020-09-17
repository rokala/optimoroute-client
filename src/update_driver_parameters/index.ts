import { RequestBase, ResponseBase } from '../base';

interface Response extends ResponseBase {
}

interface UpdateDriverParametersParams {
    externalId: string,
    date: string,
    enabled?: boolean,
    workTimeFrom?: string
    workTimeTo?: string,
    assignedVehicle?: string,
    vehicleCapacity1?: bigint,
    vehicleCapacity2?: bigint,
    vehicleCapacity3?: bigint,
    vehicleCapacity4?: bigint,
    startLatitude?: number,
    startLongitude?:number,
    startAddress?: string,
    endLatitude?: number,
    endLongitude?: number,
    endAddress?: string
}

/**
 * @see https://optimoroute.com/api/#update-driver-parameters
 */
export class UpdateDriverParameters extends RequestBase {
    public updateDriverParameters(params: UpdateDriverParametersParams): Promise<Response> {
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };
        return this.request<Response>('update_driver_parameters', options);
    }
}
