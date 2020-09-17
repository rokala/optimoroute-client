export type Schedule = {
    driverExternalId: string,
    driverSerial: string,
    driverName: string,
    vehicleRegistration: string,
    vehicleLabel: string,
    stopNumber: bigint,
    scheduledAt: string,
    scheduledAtDt: string,
    arrivalTimeDt: string,
    travelTime: bigint,
    distance: bigint,
};