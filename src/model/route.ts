import { Stop } from './stop';

export type Route = {
    success: boolean,
    driverExternalId: string,
    driverSerial: string,
    driverName: string,
    vehicleRegistration: string,
    vehicleLabel: string,
    duration: bigint,
    distance: number,
    load1: bigint,
    load2: bigint,
    load3: bigint,
    load4: bigint,
    stops: Stop[],
    routePolyline: string
};